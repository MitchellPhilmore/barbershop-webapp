import React, { useState } from "react";
import { TestimonialCard } from "./testimonial"; // Ensure this path matches your file structure
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardsData = [
  {
    imageUrl: "/testimonial-1.jpg",
    title: "THE BEST BARBER SHOP I’VE EVER BEEN",
    description:
      "The attention to detail and the friendly atmosphere make this place stand out. I always leave feeling refreshed and looking sharp.",
    name: "John Williams",
    location: "Philadelphia, PA",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "THIS BARBER SHOP IS SIMPLY AWESOME",
    description:
      "From the moment I walked in, I felt welcomed. The barbers are skilled and the service is top-notch. Highly recommend!",
    name: "Sean Carter",
    location: "Atlantic City, NJ",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "A CUT ABOVE THE REST",
    description:
      "I've been to many barber shops, but this one is by far the best. The ambiance, the service, and the quality of the haircut are unparalleled.",
    name: "Michael Brown",
    location: "New York, NY",
  },
  {
    imageUrl: "/testimonial-1.jpg",
    title: "EXCEPTIONAL SERVICE EVERY TIME",
    description:
      "Every visit is a great experience. The barbers are professional and the results are always fantastic. I wouldn't go anywhere else.",
    name: "David Smith",
    location: "Boston, MA",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "TOP-NOTCH BARBER SHOP",
    description:
      "The best haircut I've ever had! The staff is friendly, the environment is clean, and the service is exceptional. I highly recommend this place.",
    name: "Chris Johnson",
    location: "Los Angeles, CA",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "FANTASTIC EXPERIENCE",
    description:
      "I love coming here. The barbers are talented and the atmosphere is great. I always leave feeling satisfied with my haircut.",
    name: "James Davis",
    location: "Chicago, IL",
  },
];


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    if (currentIndex === cardsData.length - 1) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className="hidden lg:flex">
      <Carousel className="hidden lg:flex">
        <CarouselContent className="">
          {cardsData.map((card, index) => (
            <div key={index} className="w-2/5 flex-shrink-0 p-4">
              <CarouselItem className="basis-1/3">
                <TestimonialCard {...card}></TestimonialCard>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      <div className="flex flex-col md:hidden">
        {cardsData.map((card, index) => (
          <div key={index} className="w-2/5 flex-shrink-0 p-4">
            <TestimonialCard {...card}></TestimonialCard>
          </div>
        ))}
      </div>
    </>


  );
};

export default TestimonialCarousel;
