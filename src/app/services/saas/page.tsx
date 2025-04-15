import ImageBanner from "@/components/ImageBanner";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import SaasBox from "@/container/SaasBox";
import SaasGrid from "@/container/SaasGrid";
import SaasGrid2 from "@/container/SaasGrid2";
import SaasService from "@/container/SaasService";
import {
  Bgbanner4,
  YellowBannerData3,
  imageBanner11,
  imageBanner12,
  imageBanner13,
  saasBanner,
  saasSection,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saas Development",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const Saas = (props: Props) => {
  return (
    <>
      <Banner data={saasBanner} />
      <SaasGrid data={saasSection} />
      <ImageBanner data={imageBanner11} />
      <YellowBanner data={YellowBannerData3} />
      <SaasGrid2 />
      <ImageBanner data={imageBanner12} />
      <YellowBanner data={Bgbanner4} />
      <SaasService />
      <ImageBanner data={imageBanner13} />
      <SaasBox />
    </>
  );
};

export default Saas;
