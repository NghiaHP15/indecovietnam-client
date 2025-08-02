import BlogDetail from "@/components/BlogDetail";
import React from "react";

const BlogPage = async ({ params}: {params: Promise<{ slug: string }>}) => {

    const { slug } = await params;

    return (
        <>
           <BlogDetail slug={slug} />
        </>
    );
};

export default BlogPage;
