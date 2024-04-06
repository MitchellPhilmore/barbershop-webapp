"use client";

import { SocialMediaSection } from "../components/social-media-section";
import { Hero } from "./hero";
import { Team } from "./team";
import { WhySection } from "./why-section";

export default function About() {
  return (
    <div>
      <Hero />
      <WhySection />
      <Team />

      <div className="mt-36">
        <SocialMediaSection />
      </div>
    </div>
  );
}
