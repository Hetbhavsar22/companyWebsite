import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import EdAccordian from "@/container/EdAccordian";
import EdGrid3 from "@/container/EdGrid3";
import EdGrid5 from "@/container/EdGrid5";
import EdList from "@/container/EdList";
import EdTechGrid from "@/container/EdTechGrid";
import EdTechGrid2 from "@/container/EdTechGrid2";
import {
  YellowBannerData10,
  YellowBannerData11,
  YellowBannerData12,
  YellowBannerData13,
  banner7,
  edSection,
  imageBanner23,
  imageBanner24,
  imageBanner25,
  imageBanner26,
  imageBanner27,
  latestThinkingData2,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdTech & E-Learning",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

const EdTechPage = () => {
  return (
    <>
      <Banner data={banner7} />
      <EdTechGrid data={edSection} />
      <ImageBanner data={imageBanner23} />
      <YellowBanner data={YellowBannerData10} />
      <EdTechGrid2 />
      <ImageBanner data={imageBanner24} />
      <YellowBanner data={YellowBannerData11} />
      <EdGrid3 />
      <ImageBanner data={imageBanner25} />
      <YellowBanner data={YellowBannerData12} />
      <EdAccordian />
      <ImageBanner data={imageBanner26} />
      <YellowBanner data={YellowBannerData13} />
      <EdGrid5 />
      <ImageBanner data={imageBanner27} />
      <EdList />
      <LatestThinking data={latestThinkingData2} />
    </>
  );
};

export default EdTechPage;
