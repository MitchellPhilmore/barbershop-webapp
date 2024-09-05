"use client";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./components/header";
import { CustomerRating } from "./components/customer-rating";
import { Services } from "./components/services";
import { Appointment } from "./components/appointment";
import { Portfolio } from "./components/portfolio";
import { AboutUs } from "./components/aboutUs";
import { FeaturedProduct } from "./components/featured-product";
import { Reviews } from "./components/reviews";
import { SocialMediaSection } from "./components/social-media-section";
import { Footer } from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";
export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <div className="h-[100px]">
          <CustomerRating />
          <Services />
          <Appointment />
          <Portfolio />
          <AboutUs />
          <FeaturedProduct />
          <Reviews />
          <SocialMediaSection />
          <Footer />
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Admin Dashboard
          </Link>
        </div>
      </ParallaxProvider>
    </>
  );
}
