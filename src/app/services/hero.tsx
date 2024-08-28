"use client";

import { Services } from "../components/services";

export const Hero = () => {
  return (
    <>
      <div className="  flex flex-col items-center mb-14 self-center px-6 mt-40 w-full max-w-[1340px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 max-w-full w-[800px] max-md:px-5">
          <div className="flex gap-4 items-center">
            <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-white" />

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27000df1d6eda70d92d9247711a5f1ab68cbc2af7cbfb972f43dc9e0f9a38277?"
              className="shrink-0 self-stretch aspect-[3.45] w-[51px] "
              alt="Barber shop logo"
            />
            <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-white" />
          </div>
        </div>
        <div className="mt-6 text-white text-6xl font-black text-center uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Our services
        </div>
        <p className="text-white text-lg flex justify-center w-[60%]">
          We offer a wide range of services to meet your grooming needs. From classic haircuts to beard trims, we've got you covered.
        </p>

        <div className="flex gap-0 self-stretch pl-20 mt-10 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 p-20 bg-white shadow-lg basis-0 max-w-[1130px] w-fit max-md:px-5 max-md:max-w-full">
            <div className="mx-3.5 mt-6 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className=" grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/059bafa07adaf4bb2ab8a7b09ae066d4292db87b71c01ed2a4a6558b1f8e30d0?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Classic Haircut"
                        />
                      </div>
                      <div className="flex flex-col  ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 pb-px text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">Classic Haircut</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            A traditional haircut that never goes out of style. Our experienced barbers will give you the perfect look.
                          </div>
                          <div className="mt-6 uppercase">$37 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a503c57476a83f2a10b9b91d494ab62cbaa3bb2a643e150d5e7a5c5dff8cdbe?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Beard Trim"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 pb-px text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">Beard Trim</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            Keep your beard looking sharp with our professional beard trimming service.
                          </div>
                          <div className="mt-6 uppercase">$25 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3.5 mt-20 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2be3cc4c93b0291b67708c41befaa2b67e75a48177978873707604becf2e6f60?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Kids Haircut"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 pb-px text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">kids haircut</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            Bring your little ones in for a professional haircut. We'll make sure they leave looking their best.
                          </div>
                          <div className="mt-6 uppercase">$26 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d394dd6f1b9da7cb9334d8da257988b65d8a8c1c5c23f60261a617cffd9291b1?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Neck Shave"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 pb-px text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">Neck shave</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            Treat yourself to a relaxing neck shave. It's the perfect finishing touch to any haircut.
                          </div>
                          <div className="mt-6 uppercase">$12 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3.5 mt-20 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7659ae6256840eb86d64eefabeaaa2a433a377fca79eaaee1d9b79c0f71fc9e1?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Scalp Moisturizing"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">scalp Moisturizing</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            Give your scalp the care it deserves with our moisturizing treatment. It's a great way to relax and rejuvenate.
                          </div>
                          <div className="mt-6 uppercase">$55 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow px-0.5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df50e07afcb0589fbb526af5aad722f9193908e11583e9b91c07db394b34c2a?"
                          className="shrink-0 w-16 aspect-square max-md:mt-10"
                          alt="Beard Grooming & Spa"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-2 pr-1.5 text-xl font-black leading-7 max-w-[338px] text-neutral-900 max-md:mt-10">
                          <div className="uppercase">beard grooming & spa</div>
                          <div className="mt-3.5 text-lg leading-8 text-neutral-700">
                            Treat your beard to a little pampering. Our grooming and spa service will leave your beard looking and feeling great.
                          </div>
                          <div className="mt-6 uppercase">$46 USD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
