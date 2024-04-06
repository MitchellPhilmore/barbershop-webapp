"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductInformation = () => {
  return (
    <div className="flex flex-col max-w-full w-full items-center mt-10 bg-[#f8f5ef] ">
      <div className="flex flex-col px-[1rem] py-[1rem] self-center max-w-full text-center w-[759px] max-md:px-5">
        <div className="self-center w-full text-5xl font-black uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Product information
        </div>
        <div className="mt-4 text-lg leading-8 text-neutral-700 max-md:max-w-full">
          Eget turpis orci ac euismod nec vulputate sagittis et semper massa in
          lectus risus fringilla
          <br />
          mattis porttitor tempor lacus gravida sit sedm fusce faucibus elit
          felis aliquet metu.
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
                <TabsTrigger className=" bg-transparent uppercase text-2xl" value="shipping">
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent className="w-full mt-10 mb-10" value="about">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl "></p>About the product
                  </div>
                  <div className="mt-6 mr-9 max-md:mr-2.5 max-md:max-w-full">
                    At risus viverra adipiscing at in tellus integer feugiat
                    nisl pretium fusce id velit ut tortor
                    <br />
                    sagittis orci a scelerisque purus semper eget at lectus urna
                    duis convallis porta nibh
                    <br />
                    venenatis cras sed felis eget neque laoret consectetur
                    libero id faucibus nisl donec
                    <br />
                    pretium vulputate sapien nec sagittis aliquam nunc lobortis
                    mattis aliquam faucibus.
                  </div>
                  <div className="flex flex-col mt-6 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet niverra
                      suspendisse potenti.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Mauris commodo quis imperdiet massa tincidunt nuncr.
                    </div>
                    <div className="mt-2 mr-8 max-md:mr-2.5 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet viverra
                      suspendisse potenti.
                    </div>
                  </div>
                  <div className="mt-8 mb-3 max-md:mr-2.5 max-md:max-w-full">
                    Scelerisque augue feugiat amet idolutpat varius tristique
                    adipiscing praesent lorem
                    <br />
                    elementum netusnec viverra praesent at at ante scelerisque a
                    arcu orci lorem libero
                    <br />
                    ipsum libero sed enim blandit donec malesuada ut feugiat
                    duis tristique egestas cursus
                    <br />
                    tempor egestas porttitor arcu facilisi nibh ac donec
                    <br />
                    orci semper sit ipsum elit dictum commodo tristique tempus
                    varius sed.
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full" value="additional-info">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl uppercase "></p>Additional Info
                  </div>
                  <div className="mt-6 mr-9 max-md:mr-2.5 max-md:max-w-full">
                    At risus viverra adipiscing at in tellus integer feugiat
                    nisl pretium fusce id velit ut tortor
                    <br />
                    sagittis orci a scelerisque purus semper eget at lectus urna
                    duis convallis porta nibh
                    <br />
                    venenatis cras sed felis eget neque laoret consectetur
                    libero id faucibus nisl donec
                    <br />
                    pretium vulputate sapien nec sagittis aliquam nunc lobortis
                    mattis aliquam faucibus.
                  </div>
                  <div className="flex flex-col mt-6 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet niverra
                      suspendisse potenti.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Mauris commodo quis imperdiet massa tincidunt nuncr.
                    </div>
                    <div className="mt-2 mr-8 max-md:mr-2.5 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet viverra
                      suspendisse potenti.
                    </div>
                  </div>
                  <div className="mt-8 mb-3 max-md:mr-2.5 max-md:max-w-full">
                    Scelerisque augue feugiat amet idolutpat varius tristique
                    adipiscing praesent lorem
                    <br />
                    elementum netusnec viverra praesent at at ante scelerisque a
                    arcu orci lorem libero
                    <br />
                    ipsum libero sed enim blandit donec malesuada ut feugiat
                    duis tristique egestas cursus
                    <br />
                    tempor egestas porttitor arcu facilisi nibh ac donec
                    <br />
                    orci semper sit ipsum elit dictum commodo tristique tempus
                    varius sed.
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full" value="shipping">
                <div className="flex flex-col px-20 py-20  text-lg leading-8 bg-white text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className=" justify-center items-center  text-center text-4xl font-black uppercase leading-[50.16px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                    <p className="text-4xl uppercase "></p>Shipping
                  </div>
                  <div className="mt-6 mr-9 max-md:mr-2.5 max-md:max-w-full">
                    At risus viverra adipiscing at in tellus integer feugiat
                    nisl pretium fusce
                    <br />
                    At risus viverra adipiscing at in tellus integer feugiat
                    nisl pretium fusce
                    <br />
                      At risus viverra adipiscing at in tellus integer feugiat
                    nisl pretium fusce
                    <br />
                    pretium vulputate sapien nec sagittis aliquam nunc lobortis
                    mattis aliquam faucibus.
                  </div>
                  <div className="flex flex-col mt-6 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet niverra
                      suspendisse potenti.
                    </div>
                    <div className="mt-2 max-md:max-w-full">
                      Mauris commodo quis imperdiet massa tincidunt nuncr.
                    </div>
                    <div className="mt-2 mr-8 max-md:mr-2.5 max-md:max-w-full">
                      Adipiscing elit ut aliquam purus sit amet viverra
                      suspendisse potenti.
                    </div>
                  </div>
                  <div className="mt-8 mb-3 max-md:mr-2.5 max-md:max-w-full">
                    Scelerisque augue feugiat amet idolutpat varius tristique
                    adipiscing praesent lorem
                    <br />
                    elementum netusnec viverra praesent at at ante scelerisque a
                    arcu orci lorem libero
                    <br />
                    ipsum libero sed enim blandit donec malesuada ut feugiat
                    duis tristique egestas cursus
                    <br />
                    tempor egestas porttitor arcu facilisi nibh ac donec
                    <br />
                    orci semper sit ipsum elit dictum commodo tristique tempus
                    varius sed.
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
