"use client";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Nav } from "../components/nav";
import { Toaster } from "@/components/ui/toaster";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Toaster />
      <Footer />
    </>
  );
}
