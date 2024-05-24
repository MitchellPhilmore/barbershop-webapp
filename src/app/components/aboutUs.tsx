"use client";

import Link from "next/link";


interface SectionProps {
  title: string;
  content: string;
  imgSrc: string;
}

const Section = ({ title, content, imgSrc }: SectionProps) => {
  return (
    <div className="flex gap-5 justify-center mt-10 max-md:flex-wrap">
      <img
        loading="lazy"
        src={imgSrc}
        className="shrink-0 self-start w-14 aspect-[0.98]"
      />
      <div className="flex flex-col grow shrink-0 pb-4 basis-0 w-fit max-md:max-w-full">
        <div className="text-lg font-black leading-5 uppercase text-neutral-900 max-md:max-w-full">
          {title}
        </div>
        <div className="text-lg leading-8 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
          {content}
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col pt-16 bg-[#f8f5ef]">
        <div className="justify-between mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className=" p-[2rem] bg-[#f8f5ef] flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-w-[544px] max-md:mt-10 max-md:max-w-full">
                <img
                  id="fade"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54830da95e209132fd6f4fcfeb32ba40a298f85de40cca504f88f43d5abd5610?"
                  className="aspect-[3.45] w-[51px]"
                />
                <div className="mt-9 text-6xl font-black uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
                  Why choose us
                </div>
                <div className="mt-8 text-lg leading-8 text-neutral-700 max-md:max-w-full">
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  <br />
                  consequat pulvinar sagittis adipiscing egestas purus et mi
                  tempus
                  <br />
                  semper id vel prci eu magna in senectus sit eget justo eget.
                </div>
                <Section
                  title="Top Barbers"
                  content=" A mollis pretium sagittis iaculis quam lacus nulla nullam  pharetra quis fermentum ipsum phasellus sit."
                  imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f54f17ed7214dfc90351aa6875cf9d22b7956b0d56fad32489c83b8be265e7be?"
                />
                <Section
                  title="Premium services"
                  content=" Nulla leo velit feugiat in consequat accumsan est enim mi  consectetur dis pulvinar venenatis dapibus."
                  imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d9a42f7da970fb2fb081593cc52826501c1f5e2543f254266eb2d621350eafb7?"
                />

                <Link
                  href={"/contact"}
                  className="justify-center self-start px-7 py-8 mt-10 text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900 max-md:px-5"
                >
                  Book an appointment
                </Link>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[57%]   max-md:ml-0 max-md:w-full">
              <div className="relative w-full h-[900px] ">
                <img
                  src="/about-us-1.jpg"
                  alt="Full Size"
                  className="absolute w-full h-full object-cover top-0 left-0"
                />
                <img
                  src="/about-us-2.jpg"
                  alt="Bottom Left"
                  className="absolute bottom-0 h-[50%] w-[60%] left-[-10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
