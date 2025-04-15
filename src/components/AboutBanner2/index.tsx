import { aboutBanner2 } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { aboutBanner2Type } from "@/utils/types";
import Image from "next/image";
import React from "react";

const AboutBanner2 = ({ data }: aboutBanner2Type) => {
  return (
    <section className="bg-yellow">
      <div className="text-heading1">{data.heading}</div>
      {aboutBanner2.section.map((item, i) => {
        return (
          <>
            <div className="bg-yellow   max-xl:overflow-hidden ">
              <div
                className={cn(
                  item.id % 2 !== 0
                    ? "md:h-[75vh] flex flex-row-reverse max-sm:flex-wrap max-sm:flex-row"
                    : "md:h-[75vh] flex justify-between max-sm:flex-wrap flex-row"
                )}
              >
                <div className="md:h-[70vh] w-full sm:text-[30rem] max-sm:text-[15rem] max-lg:justify-center lg:justify-evenly flex  relative px-container">
                  {item.number}
                  <Image
                    src={item.url}
                    alt={"image"}
                    fill
                    title="about-number-banner"
                    className="absolute max-w-[350px] max-h-[350px] translate-x-[70%] translate-y-[80%] max-sm:!max-w-[150px] max-sm:!max-h-[150px] aspect-square w-full max-sm:!top-[60%] max-sm:!left-[50%] max-sm:translate-x-[-50%] max-sm:translate-y-[-60%]"
                  />
                </div>
                <div className=" text-subtitle3  flex justify-center items-center w-full  gap-x-[0.12rem]">
                  <div className="">
                    <span className="font-bold">{item.title1}</span>
                    <span>{item.title2}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default AboutBanner2;