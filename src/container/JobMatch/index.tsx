import ImageTextBanner from "@/components/hiring/ImageTextBanner";
import ImageWithCards from "@/components/hiring/ImagewithCards";
import React from "react";
import { JobMatch as data } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type Props = {};

const JobMatch = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-10 px-container  py-4 md:py-10">
      {data.map((item, index) => (
        <div
          className={cn(
            "flex justify-center items-center  gap-20 w-full max-md:flex-col-reverse",
            {
              [" md:flex-row-reverse  gap-32 items-center"]: index % 2 != 0,
            }
          )}
          key={index}
        >
          <ImageWithCards
            carddata={item.cardata}
            side={item?.side as "left" | "bottom"}
            imageurl={item.imageurl}
          />
          {/* heading section */}
          <div className="flex flex-col gap-10 max-md:*:text-center lg:max-w-[40%]">
            <h3 className="text-heading1 ">{item.title}</h3>
            {Array.isArray(item.decription) ? (
              <>
                <p>{item?.decheading}</p>
                <ul className="list-disc">
                  {item.decription.map((item, i) => {
                    return (
                      <li className="text-body1 max-md:text-center" key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <p>{item.decription}</p>
            )}
            {!item.btntext.asbtn ? (
              <p className="font-semibold">{item.btntext.text}</p>
            ) : (
              <Button className="bg-blue rounded-lg lg:max-w-[40%] w-full">
                <span className="font-light capitalize ">
                  {item.btntext.text}
                </span>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobMatch;
