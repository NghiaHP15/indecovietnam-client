"use client";

import React, { useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Blog } from "@/constants/types";
import { blogData } from "@/constants/data";

const ITEMS_PER_PAGE = 9;

const BlogView = ({ slug }: { slug?: string }) => {
  const [data, setData] = useState<Blog[]>(blogData);
  const [currentPage, setCurrentPage] = useState(1);

  // Cập nhật data theo slug và reset trang
  useEffect(() => {
    if (slug) {
      const filtered = blogData.filter((item) => item.blogCategories?.slug === slug);
      setData(filtered);
    } else {
      setData(blogData);
    }
    setCurrentPage(1); // Reset lại trang mỗi khi slug đổi
  }, [slug]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const currentData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  // Lấy tiêu đề chuyên mục nếu có slug
  const categoryTitle = useMemo(() => {
    if (!slug) return "Danh sách bài viết";
    const found = blogData.find((item) => item.blogCategories?.slug === slug);
    return found?.blogCategories?.title ?? "Danh sách bài viết";
  }, [slug]);

  return (
    <>
      <Breakcrum
        title={categoryTitle}
        description="Chia sẻ những bài viết mới nhất"
      />
      <div className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map((item) => (
              <BlogCard key={item.id} blog={item} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handleChangePage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === index + 1}
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handleChangePage(Math.min(totalPages, currentPage + 1))
                      }
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default BlogView;
