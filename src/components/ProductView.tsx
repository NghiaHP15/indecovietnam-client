"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import FilterProduct from "@/components/FilterProduct";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { dataProducts } from "@/constants/data";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

const ITEMS_PER_PAGE = 20;

const ProductView = ({ room, category }: { room?: string; category?: string }) => {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredData = useMemo(() => {
    let result = dataProducts;

    if (room) {
      result = result.filter((item) => item.category?.slug === room);
    }
    if (category) {
      result = result.filter((item) => item.category?.subCategory?.slug === category);
    }
    return result;
  }, [room, category]);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset về trang đầu khi filter thay đổi
  }, [room, category]);

  const categoryTitle = useMemo(() => {
    if (!room && !category) return "Danh sách sản phẩm";

    const found = dataProducts.find((item) => {
      const isRoomMatch = item.category?.slug === room;
      const isCategoryMatch = item.category?.subCategory?.slug === category;
      return isRoomMatch && (category ? isCategoryMatch : true);
    });

    return (
      category
        ? found?.category?.subCategory?.title
        : found?.category?.title
    ) || "Danh sách sản phẩm";
  }, [room, category]);

  return (
    <div>
      <Breakcrum title={categoryTitle} description="" />
      <Container className="my-10">
        <div className="my-4 flex items-center justify-between">
          <div className="flex gap-4 text-darkColor">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-5 h-5" />
              <div className="flex items-center gap-1">
                <span>Hiển thị:</span>
                <span>9</span>
              </div>
            </div>
            <button className="flex items-center gap-2" onClick={() => setShow(!show)}>
              <SlidersHorizontal className="w-5 h-5" />
              Lọc sản phẩm
              <ChevronDown
                className={`w-4 h-4 transition-all duration-300 ${show ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Trang {currentPage} / {totalPages} — Tổng: {totalItems} sản phẩm
            </div>
            <div className="flex items-center gap-2">
              <span>Sắp xếp:</span>
              <Select>
                <SelectTrigger className="w-[120px] border-none shadow-none rounded-none border-b">
                  <SelectValue placeholder="Mặc định" className="text-darkColor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Mặc định</SelectItem>
                  <SelectItem value="newest">Mới</SelectItem>
                  <SelectItem value="featured">Nổi bật</SelectItem>
                  <SelectItem value="high-price">Giá cao nhất</SelectItem>
                  <SelectItem value="low-price">Giá thấp nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <FilterProduct show={show} setShow={setShow} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {currentData.map((item) => (
            <ProductCard key={item.id || `${item.category?.slug}-${item.name}`} product={item} />
          ))}
        </div>

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
                    onClick={() => handleChangePage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductView;
