"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminHeader } from "../components/admin-header";
import { AdminFooter } from "../components/admin-footer";
import { isAuthenticated, signOut } from "../services/auth";
import { Dashboard as DashboardComponent } from "@/components/component/dashboard";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const authed = await isAuthenticated();
      if (!authed) {
        router.push("/login");
      } else {
        setIsAuthed(true);
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader onSignOut={handleSignOut} isAuthenticated={isAuthed} />
      <DashboardComponent onSignOut={handleSignOut} />
      <AdminFooter />
    </div>
  );
}