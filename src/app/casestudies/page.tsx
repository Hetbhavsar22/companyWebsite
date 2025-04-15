import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { caseBanner } from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <PageBanner data={caseBanner} className="bg-specialblue " />
      <OurThinking />
    </>
  );
};

export default CaseStudies;
