"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
    subject: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const sendMessage = async () => {
    setLoading(true);
    await axios
      .post("/api/sendSms", formData)
      .then(({ data }: any) => {
        console.log(data);
        if (data.success) {
          return toast({
            description: "Your message has been successfully sent!",
          });
        }

        return toast({
          description: "There was a problem sending the message!",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="flex justify-center items-center px-16 py-20 lg:mt-8 w-full max-md:px-5 max-md:max-w-full bg-[#1D1D1E]">
      <div className="justify-center mt-16 mb-28 w-full max-w-[1292px] max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex  flex-col items-start font-semibold max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f31b644fedb797e562d3efbd03244d48cadff4b07e4bf3899366cf4df08228?"
                className="aspect-[3.45] w-[51px]"
              />
              <div className="self-stretch mt-6 text-6xl font-black text-white uppercase leading-[97.98px] max-md:max-w-full max-md:text-4xl">
                Get in touch
              </div>
              <div className=" w-3/4 self-stretch mt-4 text-lg leading-8 text-neutral-200 max-md:max-w-full">
                Elementum anetus tempus volutpat mollis nisl cursus diam velit
                ut quis mi
                <br />
                consectetur sit nibh posuere sit nisi scelerisque venenatis
                risus sit ornare odio
                <br />
                nullam tortor amet egestas sapien aliquet.
              </div>
              <div className="flex gap-4 mt-10 uppercase max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f38f97d77d8d0cb26161482e055bd68677af4159520abe445313409e47a172?"
                  className="shrink-0 aspect-square w-[62px]"
                />
                <div className="flex flex-col self-start py-px">
                  <div className="text-lg tracking-widest leading-5 text-zinc-400">
                    Give us a call
                  </div>
                  <div className="mt-3 text-xl tracking-widest leading-6 text-white">
                    (475) 453 - 3465
                  </div>
                </div>
              </div>
              <div className="flex gap-4 px-px mt-8 uppercase">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/201d96721d4bd0a770739e8c7f724a46cb8d905a09f46a6b1a38c91679d63ae7?"
                  className="shrink-0 aspect-square w-[62px]"
                />
                <div className="flex flex-col self-start py-px">
                  <div className="text-lg tracking-widest leading-5 text-zinc-400">
                    Send us an email
                  </div>
                  <div className="mt-3 text-xl tracking-widest leading-6 text-white">
                    contact@Beard.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg font-semibold uppercase text-neutral-200 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-4">
                <div className="relative border-b-2 border-gray-300">
                  <Input
                    id="name"
                    name="name"
                    onChange={formHandler}
                    type="text"
                    className="bg-transparent text-lg border-none text-white placeholder-white w-full pb-1 outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div className="relative border-b-2 border-gray-300">
                  <Input
                    id="email"
                    name="email"
                    onChange={formHandler}
                    type="text"
                    className="bg-transparent text-lg border-none text-white placeholder-white w-full pb-1 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="relative border-b-2 border-gray-300">
                  <Input
                    onChange={formHandler}
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    className="bg-transparent text-lg border-none text-white placeholder-white w-full pb-1 outline-none"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="relative border-b-2 border-gray-300">
                  <Input
                    onChange={formHandler}
                    id="subject"
                    name="subject"
                    type="text"
                    className="bg-transparent text-lg border-none text-white placeholder-white w-full pb-1 outline-none"
                    placeholder="Subject"
                  />
                </div>
                <Textarea
                  onChange={formHandler}
                  id="message"
                  name="message"
                  placeholder="Please type your message here...."
                  className="bg-transparent text-lg border-b-2 border-gray-300 text-white placeholder-white w-full pb-1 outline-none"
                />
                <Button
                  onClick={sendMessage}
                  disabled={loading}
                  className="w-full py-3 font-black text-center bg-orange-200 text-neutral-900 hover:bg-[#C09B6B]"
                >
                  {loading ? <LoaderCircle /> : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
