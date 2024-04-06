import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div className="relative">{children}</div>
       <Footer />
    </>
  );
  
}
