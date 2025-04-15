import React from "react";
import { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import { JobData } from "@/lib/constData";

type Props = {
    params: {
        applyid: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Apply`,
    };
};

const Jobs = () => {
    return (
        <>
            <ApplyForm data={JobData} />
        </>
    );
};

export default Jobs;
