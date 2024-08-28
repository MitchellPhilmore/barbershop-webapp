"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="mt-14 pt-14 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <section className="mb-16">
          <div className="flex flex-col items-center max-w-[800px] mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-14 h-0.5 bg-orange-200" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4030ca54ae69f670611a3fd901f6f868bcfd9a4baa0c4abcf0590d28fd5d80?"
                alt=""
                className="mx-4 w-[51px] h-[15px]"
              />
              <div className="w-14 h-0.5 bg-orange-200" />
            </div>
            <h2 className="text-4xl font-black text-center uppercase mb-4">
              Join Our Community!
            </h2>
            <p className="text-sm text-center text-neutral-200 mb-8">
              Subscribe to our newsletter and stay ahead with the latest news, exclusive insights, and special offers delivered straight to your inbox.
            </p>
            <form className="flex w-full max-w-[690px] border-b border-zinc-500 pb-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent text-lg font-semibold tracking-widest text-neutral-200 placeholder-neutral-200"
                aria-label="Email address"
              />
              <button type="submit" className="px-5 py-6 text-base font-black bg-orange-200 text-neutral-900 uppercase">
                Subscribe now
              </button>
            </form>
          </div>
        </section>

        <hr className="border-neutral-700" />

        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between pt-20">
          <div className="w-full md:w-5/12 mb-10 md:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8282042081f2f113a49d7977fbf07551975c8c83a6db5c2eb58f2ffd4f5c54?"
              alt="Beard X Logo"
              className="mb-6 w-[173px] h-[29px]"
            />
            <p className="text-lg mb-10">
              Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper.
            </p>
          
            <div className="flex space-x-4">
              {[
                { name: 'facebook', icon: Facebook },
                { name: 'twitter', icon: Twitter },
                { name: 'instagram', icon: Instagram },
                { name: 'linkedin', icon: Linkedin },
                { name: 'youtube', icon: Youtube }
              ].map(({ name, icon: Icon }) => (
                <a key={name} href={`https://${name}.com`} className="w-9 h-9 bg-white flex items-center justify-center" aria-label={`Follow us on ${name}`}>
                  <Icon className="w-[18px] h-[18px] text-neutral-900" />
                </a>
              ))}
            </div>
          </div>
          <nav className="w-full md:w-6/12 flex justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">Quick Links</h3>
              <ul className="space-y-5">
                {['Home', 'About', 'Services'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="hover:text-orange-200 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">More</h3>
              <ul className="space-y-5">
                {['Shop', 'Contact', 'Team member'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-orange-200 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center py-14 mt-36 border-t border-neutral-700 text-neutral-200">
          <p>&copy; {new Date().getFullYear()} Beard X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
