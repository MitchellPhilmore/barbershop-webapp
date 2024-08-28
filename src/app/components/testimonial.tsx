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
      <div className="hidden bg-white shadow-lg lg:flex flex-col w-full">
        <div className="flex cursor-pointer sm:flex-col relative">
          <div className="absolute -top-6 left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={imageUrl}
              alt={`Avatar of ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4 sm:flex-col mt-16">
            <h2 className="text-xl text-center font-black">"{title}"</h2>
            {/* 5-star rating */}
            <div className="flex justify-center my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-center my-2">{description}</p>
          </div>
        </div>
        <div className="mt-auto p-4 bg-white flex justify-end items-center capitalize">
          <span className="text-black text-xl tracking-wider ">{name}</span>
          <span className="bg-gray-500 h-full w-px mx-2"></span>
          <span className=" text-gray-400 capitalize">{location}</span>
        </div>
      </div>
      <Card className="lg:hidden w-[250px]">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={imageUrl}
                alt={`Avatar of ${name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <CardTitle className="text-sm">
            <p>"{title}"</p>
          </CardTitle>
          {/* 5-star rating */}
          <div className="flex justify-center my-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
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
