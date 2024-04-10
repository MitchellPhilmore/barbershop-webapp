"use client";
import { SocialMediaSection } from "../components/social-media-section";
import { Hero } from "./hero";

export default function Services() {
  return (
    <>
      <div
        className="flex mb-14 lg:mt-14 justify-center bg-[#1d1d1e]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #1d1d1e 50%, white 50%);",
        }}
      >
        <Hero />
      </div>
      <SocialMediaSection />
    </>
  );
}
