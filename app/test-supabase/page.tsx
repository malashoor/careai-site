"use client";

import { useState } from "react";
import { getSupabase, signInWithEmail, signUpWithEmail } from "@/lib/supabase";

export default function TestSupabasePage() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("testpass123");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setMessage("");
    
    try {
      const supabase = getSupabase();
      if (!supabase) {
        setMessage("❌ Supabase client not available");
        return;
      }

      // Test basic connection
      const { data, error } = await supabase.from('profiles').select('count').limit(1);
      
      if (error) {
        setMessage(`❌ Connection failed: ${error.message}`);
      } else {
        setMessage("✅ Supabase connection successful!");
      }
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testSignUp = async () => {
    setIsLoading(true);
    setMessage("");
    
    try {
      await signUpWithEmail(email, password, "Test User");
      setMessage("✅ Sign up successful! Check email for confirmation.");
    } catch (err: any) {
      setMessage(`❌ Sign up failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testSignIn = async () => {
    setIsLoading(true);
    setMessage("");
    
    try {
      await signInWithEmail(email, password);
      setMessage("✅ Sign in successful!");
    } catch (err: any) {
      setMessage(`❌ Sign in failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Supabase Connection Test</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Test Connection</h2>
          <button
            onClick={testConnection}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Testing..." : "Test Connection"}
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Test Authentication</h2>
          
          <div className="space-y-4 mb-4">
            <div>
              <label htmlFor="test-email" className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                id="test-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="test-password" className="block text-sm font-medium mb-2">Password:</label>
              <input
                type="password"
                id="test-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="space-x-4">
            <button
              onClick={testSignUp}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? "Signing up..." : "Test Sign Up"}
            </button>
            <button
              onClick={testSignIn}
              disabled={isLoading}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Test Sign In"}
            </button>
          </div>
        </div>

        {message && (
          <div className={`p-4 rounded-lg ${
            message.startsWith("✅") ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}>
            <p className={message.startsWith("✅") ? "text-green-800" : "text-red-800"}>
              {message}
            </p>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2">Environment Check:</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <div>SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}</div>
            <div>SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}</div>
            <div>SUPABASE_SERVICE_ROLE_KEY: {process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅ Set" : "❌ Missing"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
