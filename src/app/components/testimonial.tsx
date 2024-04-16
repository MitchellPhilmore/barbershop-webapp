"use react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <>
      <div className=" hidden  bg-white shadow-lg lg:flex flex-col w-full ">
        <div className="flex cursor-pointer sm:flex-col">
          <img
            key={name + 1}
            src={imageUrl}
            alt="Card"
            className="w-1/3 object-cover"
          />
          <div className="flex-1 p-4 sm:flex-col">
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
      <Card className=" lg:hidden w-[250px]">
        <CardHeader>
          <CardTitle className="text-sm">
            <img src={imageUrl} />
            <p>Best Barbershop Ever</p>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <div className="mt-auto p-4 bg-white flex justify-end items-center capitalize">
            <span className="text-black text-sm tracking-wider ">{name}</span>
            <span className="bg-gray-500 h-full w-px mx-2"></span>
            <span className=" text-gray-400 capitalize text-sm">{location}</span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
