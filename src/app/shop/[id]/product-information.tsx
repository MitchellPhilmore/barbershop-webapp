"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductInformationProps {
  detailedDescription: string;
  additionalInformation: string;
  description: string
}

const ProductInformation = ({
  detailedDescription,
  additionalInformation,
  description
}: ProductInformationProps) => {
  return (
    <div className="flex flex-col max-w-full w-full items-center mt-10 bg-[#f8f5ef] ">
      <div className="flex flex-col px-[1rem] py-[1rem] self-center max-w-full text-center w-[759px] max-md:px-5">
        <div className="self-center w-full text-5xl font-black uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Product information
        </div>
        <div className="mt-4 text-lg leading-8 text-neutral-700 max-md:max-w-full">
           {description}
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-px mt-16 text-xl font-black tracking-wider leading-6 text-center uppercase border-b-2 border-solid border-neutral-200 text-zinc-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-0 max-md:flex-wrap">
          <div className="flex flex-col justify-center whitespace-nowrap max-w-[880px] text-neutral-900">
            <Tabs
              className="flex flex-col w-full justify-between bg-transparent whitespace-break-spaces"
              defaultValue="about"
            >
              <TabsList className="bg-transparent gap-20 w-full justify-evenly">
                <TabsTrigger
                  className=" active:bg-transparent text-2xl uppercase"
                  value="about"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  className=" bg-transparent uppercase text-2xl"
                  value="additional-info"
                >
                  Additional Info
                </TabsTrigger>
                <TabsTrigger
                  className=" bg-transparent uppercase text-2xl"
                  value="shipping"
                >
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent className="w-full mt-10 mb-10" value="about">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl "></p>About the product
                  </div>
                  <div>
                    <div className=" text-sm leading-10 mt-10 mb-10 mr-9 max-md:mr-2.5 max-md:max-w-full">
                      <p>{detailedDescription}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full" value="additional-info">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl uppercase "></p>Additional Info
                  </div>
                  <div className="text-sm leading-10 mt-5">
                    {additionalInformation}
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full" value="shipping">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl uppercase "></p>Shipping
                  </div>
                  <div className=" text-md mt-10 mb-10 mr-9 max-md:mr-2.5 max-md:max-w-full">
                    <div className="text-sm leading-10 mt-5">
                      <p>
                        🚚 Delivery Services: At The Beard, we're committed to
                        getting your grooming essentials to you swiftly and
                        securely. We partner with reputable carriers to offer a
                        range of shipping options, including standard,
                        expedited, and next-day delivery, ensuring your products
                        arrive on time and in perfect condition.
                      </p>
                      <br />
                      <p>
                        💡 Shipping Rates & Times: Standard Shipping: Enjoy free
                        standard shipping on orders over $50! For orders under
                        $50, a flat rate of $5.99 applies. Delivery within 5-7
                        business days. Expedited Shipping: Need your items
                        faster? Opt for expedited shipping at a flat rate of
                        $14.99, with delivery within 2-3 business days. Next-Day
                        Shipping: For urgent needs, select next-day shipping at
                        a flat rate of $24.99. Orders must be placed by 12 PM
                        EST for same-day dispatch.
                      </p>
                      <br />
                      <p>
                        🌍 International Shipping: Currently, The Beard ships to
                        select international destinations. Shipping rates and
                        times vary by location. Please check our international
                        shipping page for detailed information or contact our
                        customer service team.
                      </p>

                      <br />
                      <p>
                        📦 Packaging: Your products are packaged with care,
                        ensuring they arrive in pristine condition. The Beard is
                        committed to eco-friendly packaging solutions that
                        minimize waste and environmental impact.
                      </p>
                      <br />
                      <p>
                        🔄 Tracking Your Order: Once your order is dispatched,
                        you'll receive a tracking number via email. Use this
                        number to monitor your package's journey to your
                        doorstep.
                      </p>
                      <br />
                      <p>
                        📅 Processing Time: Orders are typically processed
                        within 1-2 business days. During peak times, processing
                        may take slightly longer. We appreciate your patience.{" "}
                      </p>
                      <br />
                      <p>
                        ❓ Shipping FAQ and Assistance: Have questions or need
                        assistance with your shipping options? Visit our FAQ
                        section or contact our customer service team. We're here
                        to help make your shopping experience smooth and
                        enjoyable. Please Note: Delivery times are estimates and
                        may vary due to factors outside our control, including
                        but not limited to weather conditions and postal service
                        disruptions. We're unable to change a delivery address
                        once an order has been dispatched. All shipping times
                        are based on business days (Monday - Friday), excluding
                        public holidays. Thank you for choosing The Beard for
                        your grooming needs. We're excited to serve you and
                        ensure your products arrive safely and promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
