"use react";

interface TestimonialProps {
  imageUrl: string;
  title: string;
  description: string;
  name: string;
  location: string;
}

export const TestimonialCard = ({
  imageUrl,
  title,
  description,
  name,
  location,
}: TestimonialProps) => {
  return (
    <div className=" bg-white shadow-lg flex flex-col w-full">
      <div className="flex cursor-pointer">
        <img
          key={name + 1}
          src={imageUrl}
          alt="Card"
          className="w-1/3 object-cover"
        />
        <div className="flex-1 p-4">
          <h2 className="text-xl text-center font-black ">{title}</h2>
          <p className="text-sm text-center my-2">{description}</p>
        </div>
      </div>
      <div className="mt-auto p-4 bg-white flex justify-end items-center capitalize">
        <span className="text-black text-xl tracking-wider ">{name}</span>
        <span className="bg-gray-500 h-full w-px mx-2"></span>
        <span className=" text-gray-400 capitalize">{location}</span>
      </div>
    </div>
  );
};
