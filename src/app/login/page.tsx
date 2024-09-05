"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminHeader } from "../components/admin-header";
import { AdminFooter } from "../components/admin-footer";
import { LoginForm } from "@/components/component/login-form";
import { signIn } from "../services/auth";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (username: string, password: string) => {
    try {
      await signIn(username, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader onSignOut={() => {}} isAuthenticated={false} />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-3xl">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </main>
      <AdminFooter />
    </div>
  );
}