"use client";

import { useState, useEffect } from "react";
import { getSupabase } from "@/lib/supabase";

interface ContactMessage {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  locale: string;
  path: string;
  user_agent: string;
  status: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const supabase = getSupabase();
        if (!supabase) {
          setError("Supabase client not available");
          setLoading(false);
          return;
        }

        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setError("Not authenticated");
          setLoading(false);
          return;
        }

        // Check if user is admin (you can enhance this check)
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (profile?.role !== 'admin') {
          setError("Access denied");
          setLoading(false);
          return;
        }

        // Fetch contact messages
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setMessages((data as unknown as ContactMessage[]) || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const updateStatus = async (messageId: string, newStatus: string) => {
    try {
      const supabase = getSupabase();
      if (!supabase) return;

      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', messageId);

      if (error) throw error;

      // Update local state
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: newStatus } : msg
      ));
    } catch (err: any) {
      console.error('Error updating status:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto"></div>
            <p className="mt-4 text-ink-600">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-subtle p-8">
        <div className="max-w-7xl mx-auto">
          <div className="card p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-ink-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-ink-900">Contact Messages</h1>
          <p className="text-ink-600 mt-2">
            Manage incoming contact form submissions
          </p>
        </header>

        {messages.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-ink-600">No contact messages yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {message.full_name}
                    </h3>
                    <p className="text-ink-600">{message.email}</p>
                    {message.subject && (
                      <p className="text-ink-700 font-medium mt-1">
                        Subject: {message.subject}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-sm text-ink-500">
                    <p>{formatDate(message.created_at)}</p>
                    <p className="mt-1">Status: {message.status}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-ink-800 whitespace-pre-wrap">{message.message}</p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-ink-500">
                  <span>Locale: {message.locale}</span>
                  <span>Path: {message.path}</span>
                  <span>UA: {message.user_agent.substring(0, 50)}...</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <select
                    value={message.status}
                    onChange={(e) => updateStatus(message.id, e.target.value)}
                    className="px-3 py-1 border border-ink-200 rounded text-sm"
                    aria-label={`Update status for message from ${message.full_name}`}
                  >
                    <option value="new">New</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="spam">Spam</option>
                  </select>
                  
                  <a
                    href={`mailto:${message.email}?subject=Re: ${message.subject || 'Your CareAI inquiry'}`}
                    className="px-3 py-1 bg-brand-blue text-white rounded text-sm hover:bg-brand-blue/90 transition"
                  >
                    Reply
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
