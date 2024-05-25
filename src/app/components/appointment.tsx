"use client"

import { Button } from "@/components/ui/button";

export const Appointment = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-16 max-md:pl-5 animate-fade-in-up">
      <div className="flex items-center flex-col items-start px-6 mt-16 w-full max-w-[1340px] sm:flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f99d5380e61ffa87e8444e6b81a9e3417b218ecb3ad4de99cc25d1edea20ede?"
          className="aspect-[3.45] w-[51px]"
          alt="Logo"
        />
        <div className="mt-6 text-6xl font-black uppercase leading-[67.2px] text-neutral-900 sm:px-0 max-md:max-w-full max-md:text-4xl">
          We offer a unique experience
        </div>
        <div className="flex justify-between mt-4 text-lg leading-8 text-neutral-700 lg:flex-col md:flex-col sm:flex-col">
          <p>
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing
          </p>
          <br />
          <p>
            Egestas purus et mi tempus semper id vel prci eu magna in senectus
            sit
          </p>
        </div>
        <Button className="px-7 py-8 mt-5 hover:bg-orange-300 justify-center py-8a text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900">
          Book an appointment
        </Button>
        <div className="justify-center self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <img
                  loading="lazy"
                  src={`/appointment-${index + 1}.jpg`}
                  className="self-stretch my-auto w-full aspect-[0.66] max-w-[412px] max-md:mt-10"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
