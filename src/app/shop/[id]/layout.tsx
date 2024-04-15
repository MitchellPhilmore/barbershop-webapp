"use client";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Nav } from "../../components/nav";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
