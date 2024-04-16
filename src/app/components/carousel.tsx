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
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "John Williams",
    location: "Philadelphia, PA",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "THIS BARBER SHOP IS SIMPLY AWESOME",
    description:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "Sean Carter",
    location: "Atlantic City, NJ",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "THIS BARBER SHOP IS SIMPLY AWESOME",
    description:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "Sean Carter",
    location: "Atlantic City, NJ",
  },
  {
    imageUrl: "/testimonial-1.jpg",
    title: "THE BEST BARBER SHOP I’VE EVER BEEN",
    description:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "John Williams",
    location: "Philadelphia, PA",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "THIS BARBER SHOP IS SIMPLY AWESOME",
    description:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "Sean Carter",
    location: "Atlantic City, NJ",
  },
  {
    imageUrl: "/testimonial-2.jpg",
    title: "THIS BARBER SHOP IS SIMPLY AWESOME",
    description:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor diam potenti turpis interdum eu.",
    name: "Sean Carter",
    location: "Atlantic City, NJ",
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
