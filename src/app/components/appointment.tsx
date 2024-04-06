"use client";

export const Appointment = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-16 max-md:pl-5 animate-fade-in-up">
      <div   className="flex flex-col items-start px-6 mt-16 w-full max-w-[1340px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f99d5380e61ffa87e8444e6b81a9e3417b218ecb3ad4de99cc25d1edea20ede?"
          className="aspect-[3.45] w-[51px]"
        />
        <div className="mt-6 text-6xl font-black uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          We offer an unique experience
        </div>
        <div className=" flex justify-between mt-4 text-lg leading-8 text-neutral-700 max-md:max-w-full">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing
          <br />
          egestas purus et mi tempus semper id vel prci eu magna in senectus sit
          eget justo eget.
          <div className=" hover:bg-orange-300 ml-10 justify-center px-7 py-8 text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900 max-md:px-5">
            Book an appointment
          </div>
        </div>

        <div className="justify-center self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/appointment-1.jpg"
                className="self-stretch my-auto w-full aspect-[0.66] max-w-[412px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-7">
                <img
                  loading="lazy"
                  src="/appointment-2.jpg"
                  className="w-full aspect-[1.23]"
                />
                <img
                  loading="lazy"
                  src="/appointment-3.jpg"
                  className="mt-7 w-full aspect-[0.96]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/appointment-4.jpg"
                className="self-stretch my-auto w-full aspect-[0.66] max-w-[412px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
