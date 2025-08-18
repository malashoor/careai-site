import { getSupabase } from "@/lib/supabase";
import Link from "next/link";

export default async function AdminPage() {
  const supabase = getSupabase();
  
  let totalLeads = 0;
  let totalPartnerLeads = 0;
  
  if (supabase) {
    const [leadsResult, partnerLeadsResult] = await Promise.all([
      supabase.from("leads").select("id", { count: "exact" }),
      supabase.from("partner_leads").select("id", { count: "exact" })
    ]);
    
    totalLeads = leadsResult.count || 0;
    totalPartnerLeads = partnerLeadsResult.count || 0;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-slate-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-700">
            Manage leads and partner requests
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-brand-100 rounded-md flex items-center justify-center">
                  <span className="text-brand-600 text-lg">👥</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">
                    Total Leads
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    {totalLeads}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3">
            <div className="text-sm">
              <Link
                href="/admin/leads"
                className="font-medium text-brand-600 hover:text-brand-500"
              >
                View all leads
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-600 text-lg">🤝</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">
                    Partner Requests
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    {totalPartnerLeads}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3">
            <div className="text-sm">
              <Link
                href="/admin/leads"
                className="font-medium text-green-600 hover:text-green-500"
              >
                View partner leads
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📊</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">
                    Analytics
                  </dt>
                  <dd className="text-lg font-medium text-slate-900">
                    Coming Soon
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3">
            <div className="text-sm">
              <span className="text-slate-400">
                Analytics dashboard
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-slate-900">
              Quick Actions
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/admin/leads"
                className="relative rounded-lg border border-slate-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-slate-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-brand-100 rounded-md flex items-center justify-center">
                    <span className="text-brand-600 text-lg">📋</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-900">
                    Manage Leads
                  </p>
                  <p className="text-sm text-slate-500">
                    View and manage all leads
                  </p>
                </div>
              </Link>

              <Link
                href="/admin/leads?type=partner"
                className="relative rounded-lg border border-slate-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-slate-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <span className="text-green-600 text-lg">🤝</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-900">
                    Partner Leads
                  </p>
                  <p className="text-sm text-slate-500">
                    Review partnership requests
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
