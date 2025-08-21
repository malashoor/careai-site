import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

export default async function TicketPage({ params }: { params: { id: string } }) {
  // Server-side only - safe to use service role key
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  const { data, error } = await supabase
    .from('contact_messages')
    .select('ticket_id, created_at, full_name, email, subject, status, email_ack_status, email_ack_at')
    .eq('ticket_id', params.id)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ticket {data.ticket_id}
            </h1>
            <p className="text-gray-500">
              Created on {new Date(data.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>

          {/* Ticket Details */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <p className="text-gray-900">{data.full_name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <p className="text-gray-900">{data.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <p className="text-gray-900">{data.subject}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  data.status === 'new' ? 'bg-blue-100 text-blue-800' :
                  data.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {data.status === 'new' ? 'New' : 
                   data.status === 'in_progress' ? 'In Progress' : 
                   'Resolved'}
                </span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Acknowledgment
                </label>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    data.email_ack_status === 'sent' ? 'bg-green-100 text-green-800' :
                    data.email_ack_status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {data.email_ack_status === 'sent' ? 'Sent' : 
                     data.email_ack_status === 'failed' ? 'Failed' : 
                     'Pending'}
                  </span>
                  {data.email_ack_at && (
                    <span className="text-xs text-gray-500">
                      {new Date(data.email_ack_at).toLocaleTimeString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@careai.app" className="text-blue-600 hover:text-blue-800">
                support@careai.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
