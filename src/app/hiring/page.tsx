import HiringSectionHeading from "@/components/hiring/HiringSectionHeading";
import ImageWithCards from "@/components/hiring/ImagewithCards";
import Titlecards from "@/components/hiring/TitleCards";
import HiringFrequrntlyAskedQuestions from "@/container/HiringFaq";
import HiringFeatureSection from "@/container/HiringFeatureSection";
import HiringKnow from "@/container/HiringKnow";
import HiringSectionBanner from "@/container/HiringSectionBanner";
import WorkWithUs from "@/container/HiringWorkWithUs";
import JobMatch from "@/container/JobMatch";
import { title } from "process";
import React from "react";

type Props = {};
const titledata = [
  {
    title: "Candidate Search and Vetting",
    dec: "We find and vet the best candidates to fit your business needs.",
  },
  {
    title: "Payroll Management",
    dec: "We handle payroll, ensuring your employees are paid accurately and on time.",
  },
  {
    title: "Logistics Management",
    dec: "We handle all logistics, including equipment delivery, to ensure smooth operations.",
  },
  // {
  //   title: "Compliance Management",
  //   dec: "We ensure your business is always in compliance with all regulations.",
  // },
  // {
  //   title: "Employee Benefits Management",
  //   dec: "As your partner, we assist in managing gifts, bonuses, and other employee benefits.",
  // },
];
const page = (props: Props) => {
  return (
    // <div className="px-container">
    //   {/* <div className="h-dvh w-dvw flex justify-center items-center gap-10">
    //     <ImageWithCards />
    //   </div> */}

    //   <div className="flex flex-col gap-4">
    //     <HiringSectionHeading
    //       title="Employee-as-a-Service"
    //       decription="We not only identify the ideal candidates, but also handle all formalities, from hiring to managing their payment. In this way, we become your strategic ally, simplifying your business growth."
    //     />
    //     <div
    //       className="columns-3  overflow-hidden gap-5
    //      max-sm:flex-col"
    //     >
    //       {titledata.map((item, index) => (
    //         <div
    //           className="border rounded-lg p-5  w-full bg-white h-full max-w-[380px] line-clamp-3"
    //           key={index}
    //         >
    //           <Titlecards titledata={item} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-4">
    //     <HiringSectionHeading
    //       title="360 Solution for Your Business"
    //       decription="Our comprehensive solution includes candidate search and vetting, payroll management, logistics handling, compliance management, and partnership in employee benefits such as gifts and bonuses."
    //     />
    //     <div
    //       className="columns-3  overflow-hidden gap-5
    //      max-sm:flex-col"
    //     >
    //       {titledata.map((item, index) => (
    //         <div
    //           className="border rounded-lg p-5  w-full bg-white h-full max-w-[380px] line-clamp-3"
    //           key={index}
    //         >
    //           <Titlecards titledata={item} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col gap-10 max-sm:gap-4">
      <HiringSectionBanner />
      <HiringFeatureSection />
      <HiringKnow />
      <JobMatch />
      <WorkWithUs />
      <HiringFrequrntlyAskedQuestions />
    </div>
  );
};

export default page;
