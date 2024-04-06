"use client";

import Faq from "./faq";
import Hero from "./hero";

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center">
        <Faq />
      </div>
    </>
  );
};

export default Contact;
