"use client";

import { Suspense, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

// Utility function for stable date formatting (prevents hydration mismatches)
function formatDate(dateString: string | null): string {
  if (!dateString) return 'N/A';
  try {
    // Use a consistent format that won't vary between server/client
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return 'N/A';
  }
}

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  source: string;
  created_at: string;
}

interface PartnerLead {
  id: string;
  org_name: string;
  contact_name: string;
  contact_email: string;
  type: string;
  status: string;
  created_at: string;
}

function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [partnerLeads, setPartnerLeads] = useState<PartnerLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const supabase = getSupabase();
        if (!supabase) {
          console.error('Supabase client not available');
          return;
        }

        // Load regular leads
        const { data: leadsData, error: leadsError } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (leadsError) throw leadsError;

        // Load partner leads
        const { data: partnerData, error: partnerError } = await supabase
          .from('partner_leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (partnerError) throw partnerError;

        setLeads((leadsData as unknown as Lead[]) || []);
        setPartnerLeads((partnerData as unknown as PartnerLead[]) || []);
      } catch (error) {
        console.error('Error loading leads:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading leads...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-md font-medium text-slate-900 mb-4">Partner Leads</h4>
        <div className="overflow-x-auto">
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
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {partnerLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        {lead.org_name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        {lead.contact_name}
                      </div>
                      <div className="text-sm text-slate-500">{lead.contact_email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {lead.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      lead.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      lead.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                      lead.status === 'converted' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {formatDate(lead.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-medium text-slate-900 mb-4">Regular Leads</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        {lead.first_name} {lead.last_name}
                      </div>
                      <div className="text-sm text-slate-500">{lead.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      {lead.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {formatDate(lead.created_at)}
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

export default function LeadsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-slate-900">
            Leads Management
          </h1>
          <p className="mt-2 text-sm text-slate-700">
            View and manage all leads and partner requests
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Suspense fallback={<div>Loading leads...</div>}>
          <LeadsTable />
        </Suspense>
      </div>
    </div>
  );
}
