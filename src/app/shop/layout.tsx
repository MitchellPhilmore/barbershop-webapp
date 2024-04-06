"use client";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Nav } from "../components/nav";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
