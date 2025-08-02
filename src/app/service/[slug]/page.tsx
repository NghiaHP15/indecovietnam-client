import ServiceDetail from "@/components/ServiceDetail";
import React from "react";

const ServicePage = async ({ params}: {params: Promise<{ slug: string }>}) => {

    const { slug } = await params;

    return (
        <>
           <ServiceDetail slug={slug} />
        </>
    );
};

export default ServicePage;
