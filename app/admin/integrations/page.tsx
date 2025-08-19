"use client";

import { useState, useEffect } from "react";
import { getSupabase } from "@/lib/supabase";

interface Integration {
  id: string;
  org_name: string;
  type: string;
  status: string;
  api_key_prefix?: string;
  credit_cents_balance?: number;
  created_at: string;
  partner_lead_id?: string;
}

interface PartnerLead {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  partner_type: string;
  created_at: string;
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [partnerLeads, setPartnerLeads] = useState<PartnerLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [issuingKey, setIssuingKey] = useState<string | null>(null);
  const [newIntegration, setNewIntegration] = useState({
    org_name: "",
    type: "hospital",
    start_credit_cents: 10000,
    rate_limit_per_min: 60
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const supabase = getSupabase();
    if (!supabase) return;

    try {
      const [integrationsResult, leadsResult] = await Promise.all([
        supabase.from("integrations").select("*").order("created_at", { ascending: false }),
        supabase.from("partner_leads").select("*").order("created_at", { ascending: false })
      ]);

      if (integrationsResult.data) setIntegrations(integrationsResult.data as unknown as Integration[]);
      if (leadsResult.data) setPartnerLeads(leadsResult.data as unknown as PartnerLead[]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const createIntegration = async (lead: PartnerLead) => {
    const supabase = getSupabase();
    if (!supabase) return;

    try {
      const { data, error } = await supabase
        .from("integrations")
        .insert({
          partner_lead_id: lead.id,
          org_name: lead.organization,
          type: lead.partner_type,
          status: "pending",
          credit_cents_balance: 0
        })
        .select()
        .single();

      if (error) throw error;
      
      await loadData();
      alert("Integration created successfully!");
    } catch (error) {
      console.error("Error creating integration:", error);
      alert("Error creating integration");
    }
  };

  const approveIntegration = async (integrationId: string) => {
    const supabase = getSupabase();
    if (!supabase) return;

    try {
      const { error } = await supabase
        .from("integrations")
        .update({ status: "approved" })
        .eq("id", integrationId);

      if (error) throw error;
      
      await loadData();
      alert("Integration approved!");
    } catch (error) {
      console.error("Error approving integration:", error);
      alert("Error approving integration");
    }
  };

  const issueApiKey = async (integrationId: string) => {
    setIssuingKey(integrationId);
    
    try {
      const response = await fetch("/api/admin.issue-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          integration_id: integrationId,
          start_credit_cents: newIntegration.start_credit_cents,
          rate_limit_per_min: newIntegration.rate_limit_per_min
        })
      });

      if (!response.ok) throw new Error("Failed to issue API key");

      const { api_key, webhook_secret } = await response.json();
      
      // Show the API key to admin (they'll copy and email it)
      const keyDisplay = `API Key: ${api_key}\nWebhook Secret: ${webhook_secret}`;
      
      // Safe browser API check (prevents hydration mismatches)
      if (typeof window !== 'undefined' && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(keyDisplay);
          alert("API key copied to clipboard! Please email it to the partner.");
        } catch (clipboardError) {
          console.warn('Clipboard write failed, falling back to prompt:', clipboardError);
          prompt("Copy this API key and email it to the partner:", keyDisplay);
        }
      } else {
        prompt("Copy this API key and email it to the partner:", keyDisplay);
      }

      // Notify partner via email
      await fetch("/.netlify/functions/notify-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: api_key,
          webhook_secret: webhook_secret,
          to: "partner@example.com", // Get from integration data
          org_name: "Partner Org" // Get from integration data
        })
      });

      await loadData();
    } catch (error) {
      console.error("Error issuing API key:", error);
      alert("Error issuing API key");
    } finally {
      setIssuingKey(null);
    }
  };

  const addCredit = async (integrationId: string, cents: number) => {
    const supabase = getSupabase();
    if (!supabase) return;

    try {
      const { error } = await supabase
        .from("credit_ledger")
        .insert({
          integration_id: integrationId,
          delta_cents: cents,
          reason: "manual_adjustment",
          memo: "Admin credit addition"
        });

      if (error) throw error;

      // Update integration balance
      const { error: updateError } = await supabase
        .from("integrations")
        .update({ 
          credit_cents_balance: supabase.rpc('get_credit_balance', { i_id: integrationId })
        })
        .eq("id", integrationId);

      if (updateError) throw updateError;
      
      await loadData();
      alert("Credit added successfully!");
    } catch (error) {
      console.error("Error adding credit:", error);
      alert("Error adding credit");
    }
  };

  if (loading) return <div>Loading integrations...</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-slate-900">
            Partner Integrations
          </h1>
          <p className="mt-2 text-sm text-slate-700">
            Manage partner API access and credit balances
          </p>
        </div>
      </div>

      {/* Pending Partner Leads */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-slate-900 mb-4">Pending Partner Leads</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {partnerLeads
                .filter(lead => !integrations.some(i => i.partner_lead_id === lead.id))
                .map((lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{lead.organization}</div>
                    <div className="text-sm text-slate-500">{lead.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">{lead.name}</div>
                    <div className="text-sm text-slate-500">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {lead.partner_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => createIntegration(lead)}
                      className="text-sm bg-brand-600 text-white px-3 py-1 rounded hover:bg-brand-700"
                    >
                      Create Integration
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Integrations */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-slate-900 mb-4">Active Integrations</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  API Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {integrations.map((integration) => (
                <tr key={integration.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{integration.org_name}</div>
                    <div className="text-sm text-slate-500">{integration.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {integration.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      integration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      integration.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                      integration.status === 'live' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {integration.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {integration.api_key_prefix ? `${integration.api_key_prefix}...` : 'Not issued'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    ${(integration.credit_cents_balance || 0) / 100}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {integration.status === 'pending' && (
                      <button
                        onClick={() => approveIntegration(integration.id)}
                        className="text-brand-600 hover:text-brand-900"
                      >
                        Approve
                      </button>
                    )}
                    {integration.status === 'approved' && (
                      <button
                        onClick={() => issueApiKey(integration.id)}
                        disabled={issuingKey === integration.id}
                        className="text-brand-600 hover:text-brand-900 disabled:opacity-50"
                      >
                        {issuingKey === integration.id ? 'Issuing...' : 'Issue Key'}
                      </button>
                    )}
                    <button
                      onClick={() => {
                        const cents = prompt("Enter credit amount in cents (e.g., 1000 for $10):");
                        if (cents) addCredit(integration.id, parseInt(cents));
                      }}
                      className="text-green-600 hover:text-green-900"
                    >
                      Add Credit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
