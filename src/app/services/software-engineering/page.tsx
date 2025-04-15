import ImageBanner from "@/components/ImageBanner";
import ServiceBox from "@/components/ServiceBox";
import ServiceIcon2 from "@/components/ServiceIcon2";
import Swiper1 from "@/components/Swiper";
import Tab from "@/components/Tab";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import Service from "@/container/Service";
import {
  Bgbanner,
  Bgbanner1,
  SwiperServices,
  banner,
  imageBanner,
  imageBanner1,
  imageBanner2,
  serviceicon,
  tabdata,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineering",
  description: "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

const Services = () => {
  return (
    <>
      <Banner data={banner}/>
      <Service data={serviceicon} />
      <ImageBanner data={imageBanner} />
      <YellowBanner data={Bgbanner} />
      <ServiceIcon2 />
      <ImageBanner data={imageBanner1} />
      <YellowBanner data={Bgbanner1} />
      <Tab data={tabdata} />
      <ImageBanner data={imageBanner2} />
      <ServiceBox />
      <Swiper1 data={SwiperServices} />
    </>
  );
};

export default Services;
