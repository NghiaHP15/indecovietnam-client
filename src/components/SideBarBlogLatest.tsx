import React from "react";
import { blogData } from "@/constants/data";
import Image from "next/image";
import dayjs from "dayjs";
import { Calendar } from "lucide-react";
import Link from "next/link";

const SideBarBlogLatest = ({ size }: {size: number}) => {

    const data = blogData.filter(item => item?.latestBlog === true).slice(0, size);

    return (
        <div className="space-y-4 px-4 py-6 shadow-[2px_2px_10px_0px_#e7e7e7] rounded-sm">
            <h2 className="text-xl font-bold text-darkColor border-l-4 border-light_brownish pl-2 ">Bài viết mới nhất</h2>
            <div>
                {data.map((item, index) => (
                    <div key={index} className="pb-3 mb-3 border-b border-b-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
                            <div className="col-span-2 overflow-hidden">
                                <Link href={`/blog/${item?.blogCategories?.slug}/${item?.slug}`}>
                                    <Image
                                        src={item?.image}
                                        alt="blogImage"
                                        width={500}
                                        height={500}
                                        className="w-full max-h-80 object-cover hover:scale-105 transition duration-300 rounded-[2px]"
                                    ></Image>
                                </Link>
                            </div>
                            <div className="flex flex-col justify-start col-span-3 gap-1">
                                <Link href={`/blog/${item?.blogCategories?.slug}/${item?.slug}`}>
                                    <h3 className="text-base line-clamp-1 hover:text-dark_brownish hoverEffect">{item?.title}</h3>
                                </Link>
                                <span className="text-sm">{item?.author}</span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3 "/>
                                    <span className="text-xs">{dayjs(item?.publishedAt).format("DD - MM - YYYY")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBarBlogLatest;
