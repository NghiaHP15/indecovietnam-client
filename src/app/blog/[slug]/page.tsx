import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import LikeShare from "@/components/LikeShare";
import SideBarBlogCategory from "@/components/SideBarBlogCategory";
import SideBarBlogLatest from "@/components/SideBarBlogLatest";
import { blogData } from "@/constants/data";
import { slugify } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = async ({ params}: {params: Promise<{ slug: string }>}) => {

    const { slug } = await params;

    const data = blogData.find(item => item?.slug === slug);

    return (
        <>
           <Breakcrum title={data?.title || "" } description={data?.description || ""}/>
            <Container className="py-10 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-4 md:col-span-3">
                        <div className="flex flex-col gap-5">
                            <div>
                                <Image
                                    src={data?.image || ""}
                                    alt="blogImage"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-cover rounded-[5px]"
                                ></Image>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-2xl text-darkColor font-bold">{data?.title}</h1>
                                <p className="text-gray-600 text-base">{data?.description}</p>
                                <div className="flex items-center gap-5">
                                    <span>Tác giả: {data?.author}</span>
                                    <div className="flex items-center gap-2 border-l-2 pl-2 border-gray-300">
                                        <Calendar className="w-4 h-4"/>
                                        <span>Xuất bản: {data?.publishedAt}</span>
                                    </div>
                                    <div className="border-l-2 pl-2 border-gray-300 hover:text-dark_brownish hoverEffect">
                                        <Link href={`/blog/${data?.blogCategories?.slug}`}><span>{data?.blogCategories?.title}</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {data?.body !== undefined ? (
                                    <div dangerouslySetInnerHTML={{ __html: data.body }} />
                                ) : (
                                    <span>Đang cập nhật ...</span>
                                )}
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <span>Tags: </span>
                                {data?.tags.map((tag, index) => (
                                <Link key={index} href={`/blog/tag/${slugify(tag)}`}>
                                    <span className="inline-block bg-gray-100 text-sm text-gray-600 rounded px-2 py-1 mr-2 hover:bg-gray-200">
                                    #{tag}
                                    </span>
                                </Link>
                                ))}
                            </div>
                            <LikeShare url={`/blog/${data?.blogCategories?.slug}/${data?.slug}`}/>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <SideBarBlogCategory />
                        <SideBarBlogLatest size={8}/>
                    </div>
                    <div className="col-span-4 w-full h-[300px] rounded-xl"
                        style={{
                            backgroundImage: `url(https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751880557/indeco/banner_article_img_kgil8o.jpg)`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} >
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BlogPage;
