import React from "react";
import { Metadata } from "next";
import JobDescription from "@/components/JobDescription";
import { JobData } from "@/lib/constData";
type Props = {
    params: {
        Jobid: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Jobs`,
    };
};

const Jobs = () => {
    return (
        <>
            <JobDescription data={JobData} />
        </>
    );
};

export default Jobs;
