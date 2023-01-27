import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";


const moreinfo = () => {
  const infos = [
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },
  ];

  const minfos = [
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at nobis quam. Autem iure sunt eligendi architecto sint? Voluptatum, accusantium.",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto mt-36">
      <div>
        <p className="uppercase text-xs text-gray-400 font-semibold">
          more info
        </p>
        <p className="capitalize text-3xl">Common questions</p>
      </div>

      <div className="mt-12">
        <div className="flex space-x-16 ">
          <div className="space-y-5">
            {infos.map((info, i) => {
              return (
                <Disclosure key={i}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open ? "bg-[#524FD5]" : "bg-white"
                        } w-[600px]  rounded-3xl  border border-gray-200  px-4 py-8 text-left text-sm font-medium ${open? "text-white" :"text-black"} `}
                      >
                        <div className="flex justify-between">
                          <span>{info.title}</span>

                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />



                        </div>

                        <div>
                          <Disclosure.Panel className={`pt-4 pb-2 text-sm  ${open? "text-white" : "text-black"} `}>
                            {info.subtitle}
                          </Disclosure.Panel>
                        </div>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>

          <div className="space-y-5">
            {minfos.map((minfo, j) => {
              return (
                <Disclosure key={j}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open ? "bg-[#524FD5]" : "bg-white"
                        } w-[600px]  rounded-3xl  border border-gray-200  px-4 py-8 text-left text-sm font-medium ${open? "text-white" :"text-black"} `}
                      >
                        <div className="flex justify-between">
                          <span>{minfo.title}</span>

                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />



                        </div>

                        <div>
                          <Disclosure.Panel className={`pt-4 pb-2 text-sm ${open? "text-white" : "text-black"} `}>
                            {minfo.subtitle}
                          </Disclosure.Panel>
                        </div>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default moreinfo;
