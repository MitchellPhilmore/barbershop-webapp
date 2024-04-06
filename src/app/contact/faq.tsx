"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="flex flex-col px-6 mt-32  w-full max-w-[1340px] max-md:px-5 max-md:my-10 max-md:max-w-full">
      <div className="flex flex-col self-center px-2 py-px max-w-full w-[830px]">
        <div className="flex gap-4 items-center self-center">
          <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd67694507cdc4caee8a97525958d6011167e87225ff737fed4c140d571bbad?"
            className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
          />
          <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
        </div>
        <div className=" text-6xl mb-10 font-black text-center uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Frequently Asked questions
        </div>
      </div>
      <Accordion
        className="flex mt-8 flex-col gap-y-10"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-black text-4xl no-underline hover:no-underline">
            Do you offer neck shaving service?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae commodi explicabo numquam dolorum corporis facilis
            doloribus, cum nisi dolor modi deserunt quisquam a, distinctio
            aspernatur amet ipsa reiciendis suscipit provident?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-black text-4xl no-underline hover:no-underline">
            Do you offer long hair haircuts?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae commodi explicabo numquam dolorum corporis facilis
            doloribus, cum nisi dolor modi deserunt quisquam a, distinctio
            aspernatur amet ipsa reiciendis suscipit provident?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-black text-4xl no-underline hover:no-underline">
            Can I get a refund if i need to cancel?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae commodi explicabo numquam dolorum corporis facilis
            doloribus, cum nisi dolor modi deserunt quisquam a, distinctio
            aspernatur amet ipsa reiciendis suscipit provident?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-black text-4xl no-underline hover:no-underline">
            How do I take care of my beard daily?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae commodi explicabo numquam dolorum corporis facilis
            doloribus, cum nisi dolor modi deserunt quisquam a, distinctio
            aspernatur amet ipsa reiciendis suscipit provident?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
