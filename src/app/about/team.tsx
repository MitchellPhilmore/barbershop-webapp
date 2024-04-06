import * as React from "react";

export const Team = () => {
  return (
    <div
      id="about"
      className="flex mt-36 justify-center items-center px-16 max-md:pl-5"
    >
      <div className="flex flex-col items-center px-6 w-full max-w-[1340px] max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 max-w-full w-[574px] max-md:px-5">
          <div className="flex gap-4 items-center">
            <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/471410c48c37a946ef719252e1e420f74c90cbd01f7d7cb8158e26ccb662d35f?"
              className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
            />
            <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
          </div>
        </div>
        <div className="mt-6 text-6xl font-black text-center uppercase leading-[67.2px] text-neutral-900 max-md:text-4xl">
          Meet Our Team
        </div>
        <div className="mt-4 text-lg leading-8 text-center text-neutral-700 max-md:max-w-full">
          Eu, in in pharetra mauris mi pretium magnis nullam et consequat vel
          ina
          <br />
          sit ut pharetra ultrices feugiat etol quam luctus in dictum.
        </div>
        <div className="justify-center self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch uppercase max-w-[412px] max-md:mt-7">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-[0.85]">
                  <img
                    loading="lazy"
                    src="/staff-1.jpg"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col items-start pt-20 pr-20 pb-9 pl-6 mt-44 bg-[linear-gradient(355deg,rgba(18,18,18,0.46_42.7%,rgba(18,18,18,0.00)_77.1%))] max-md:px-5 max-md:mt-10">
                    <div className="mt-12 text-2xl font-black leading-9 text-white max-md:mt-10">
                      John Carter
                    </div>
                    <div className="mt-1 text-lg font-semibold tracking-widest leading-5 text-zinc-50">
                      Owner & Master Barber
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto uppercase max-w-[412px] max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-[0.85]">
                  <img
                    loading="lazy"
                    src="/staff-2.jpg"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col items-start pt-20 pr-20 pb-9 pl-6 mt-44 bg-[linear-gradient(355deg,rgba(18,18,18,0.46_42.7%,rgba(18,18,18,0.00)_77.1%))] max-md:px-5 max-md:mt-10">
                    <div className="mt-12 text-2xl font-black leading-9 text-white max-md:mt-10">
                      Phil Houston
                    </div>
                    <div className="mt-1 text-lg font-semibold tracking-widest leading-5 text-zinc-50">
                      Master Barber
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch mt-36 uppercase max-w-[412px] max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-[0.85]">
                  <img
                    loading="lazy"
                    src="/staff-3.jpg"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col items-start pt-20 pr-20 pb-9 pl-6 mt-44 bg-[linear-gradient(355deg,rgba(18,18,18,0.46_42.7%,rgba(18,18,18,0.00)_77.1%))] max-md:px-5 max-md:mt-10">
                    <div className="mt-12 text-2xl font-black leading-9 text-white max-md:mt-10">
                      Frances Willem
                    </div>
                    <div className="mt-1 text-lg font-semibold tracking-widest leading-5 text-zinc-50">
                      Master Barber
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
