import ImageBanner from "@/components/ImageBanner";
import Swiper3 from "@/components/Swiper3";
import YellowBanner from "@/components/YellowBanner";
import BackBox from "@/container/BackBox";
import BackGrid from "@/container/BackGrid";
import BackGrid2 from "@/container/BackGrid2";
import BackGrid3 from "@/container/BackGrid3";
import Banner from "@/container/Banner";
import {
  SwiperServices3,
  YellowBannerData4,
  backSection,
  banner4,
  imageBanner14,
  imageBanner15,
  imageBanner16,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Back-End Development",
  description: "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const Backend = (props: Props) => {
  return (
    <>
      <Banner
        data={banner4}
      />
      <BackGrid data={backSection} />
      <ImageBanner data={imageBanner14} />
      <YellowBanner data={YellowBannerData4} />
      <BackGrid2 />
      <ImageBanner data={imageBanner15} />
      <BackGrid3 />
      <ImageBanner data={imageBanner16} />
      <BackBox />
      <Swiper3 data={SwiperServices3} />
    </>
  );
};

export default Backend;
