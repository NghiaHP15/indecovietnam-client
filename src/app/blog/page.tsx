import BlogView from "@/components/BlogView";
import React from "react";

const BlogPage = async ({ searchParams }: { searchParams?: Promise<{ category?: string }>}) => {

  const { category } = await searchParams || {};

  return (
    <BlogView category={category} />
  );
};

export default BlogPage;