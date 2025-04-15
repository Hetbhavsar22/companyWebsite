import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { pageBanner } from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Thinking",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const Ourthinking = (props: Props) => {
  return (
    <>
      <PageBanner data={pageBanner} />
      <OurThinking />
    </>
  );
};

export default Ourthinking;
