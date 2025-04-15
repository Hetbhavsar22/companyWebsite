import LatestThinking from "@/components/LatestThinking";
import MobileSwiper from "@/components/MobileSwiper";
import ProjectBanner from "@/components/ProjectBanner";
import ProjectChallanges from "@/components/ProjectChallanges";
import ProjectSection from "@/components/ProjectSection";
import ProjectSwiper from "@/components/ProjectSwiper";
import { backendData, backendData2, latestThinkingData } from "@/lib/constData";
import React from "react";
import { Metadata } from "next";
import Sticky from "@/components/Sticky";

type Props = {
  params: {
    projectid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Projects ${params.projectid}`,
  };
};

const Projects = () => {
  return (
    <>
      <ProjectBanner data={backendData} />
      <ProjectChallanges data={backendData} />
      <ProjectSection
        data={backendData2}
        className="bg-yellow"
        order="lg:order-1"
      />
      {/* <ProjectSwiper /> */}
      <ProjectSection data={backendData2} className="bg-blue text-background" />
      <MobileSwiper />
      <LatestThinking data={latestThinkingData} />
      <Sticky />
    </>
  );
};

export default Projects;
