import ServiceView from "@/components/ServiceView";
import React from "react";

const ServicePage = async ({ searchParams }: { searchParams?: Promise<{ category?: string }>}) => {

  const { category } = await searchParams || {};

  return (
    <ServiceView category={category} />
  );
};

export default ServicePage;