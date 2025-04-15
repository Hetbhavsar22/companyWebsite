
import CareerBanner from "@/components/CareerBanner";
import CareerBanner2 from "@/components/CareerBanner2";
import CareerCV from "@/components/CareerCV";
import CareerCap from "@/components/CareerCap";
import CareerCity from "@/components/CareerCity";
import CareerMany from "@/components/CareerMany";
import CareerPage2 from "@/components/CareerPage2";
import CareerPage4 from "@/components/CareerPage4";
import CareerPage5 from "@/components/CareerPage5";
import CareerSection from "@/components/CareerSection";
import CareerSection2 from "@/components/CareerSection2";
import {
  career,
  career2,
  careerBanner2,
  careerbannerdata,
  careercap,
  careercity,
  careercv,
  careermany,
  careerpage2data,
  careerpage4data,
  careerpage5data,
  careerpage6data,
  careerpage7data,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Oppertunity",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <CareerBanner data={careerbannerdata} />
      <CareerPage2 data={careerpage2data} />
      <CareerCap data={careercap} />
      <CareerPage4 data={careerpage4data} />
      <CareerPage5 data={careerpage5data} />
      <CareerPage2 data={careerpage6data} />
      <CareerPage4 data={careerpage7data} />
      <CareerSection data={career} />
      <CareerBanner2 data={careerBanner2} />
      <CareerSection2 data={career2} />
      <CareerCity data={careercity} />
      <CareerMany data={careermany} />
      <CareerCV data={careercv} />
    </>
  );
};

export default AboutPage;
