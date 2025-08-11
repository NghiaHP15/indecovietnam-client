"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import FilterProduct from "@/components/FilterProduct";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Filter, Product } from "@/constants/types";
import { getAllProducts } from "@/services/productService";
import { SortByProduct } from "@/constants/enum";

const ITEMS_PER_PAGE = 20;

const ProductView = ({ room, category }: { room?: string; category?: string }) => {
  const [data, setData] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filter>({ category: null, color: null, size: null, price: null });
  const [show, setShow] = useState(false);
  const [ sortBy, setSortBy] = useState({ sortBy: "", order: "" });
  const [selectedOption, setSelectedOption] = useState<string>("new");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getAllProducts({ params: {limit: 100, ...sortBy} });
        if (res.data.success) {
            setData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlog();
    setCurrentPage(1); 
  }, [category, room, sortBy]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchCategory = !filters.category || item.productCategory?.roomCategory?.slug === filters.category;
      const matchColor = !filters.color || item.variants?.some(v => v.color?.code === filters.color);
      const matchSize = !filters.size || item.variants?.some(v => v.size === filters.size);
      const matchPrice = !filters.price || (() => {
        const [min, max] = filters.price.split("-").map(Number);
        return item.min_price >= min && item.max_price <= max;
      })();

      const matchRoom = !room || item.productCategory?.roomCategory?.slug === room;

      return matchCategory && matchColor && matchSize && matchPrice && matchRoom;
    });
  }, [data, filters, room]);

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

    const found = data.find((item) => {
      const isRoomMatch = item.productCategory?.roomCategory?.slug === room;
      const isCategoryMatch = item.productCategory?.slug === category;
      return isRoomMatch && (category ? isCategoryMatch : true);
    });

    return (
      category
        ? found?.productCategory?.title
        : found?.productCategory?.roomCategory.title
    ) || "Danh sách sản phẩm";
  }, [room, category, data]);

  const handleSelectChange = useCallback((value: SortByProduct) => {
    switch (value) {
      case SortByProduct.NEW:
        setSortBy({ sortBy: "created_at", order: "desc" });
        break;
      case SortByProduct.HOT:
        setSortBy({ sortBy: "updated_at", order: "asc" });
        break;
      case SortByProduct.MIN_PRICE:
        setSortBy({ sortBy: "min_price", order: "asc" });
        break;
      case SortByProduct.MAX_PRICE:
        setSortBy({ sortBy: "max_price", order: "desc" });
        break;
      default:
        setSortBy({ sortBy: "", order: "" });
        break;
    }
    setSelectedOption(value);
  },[])

  return (
    <div>
      <Breakcrum title={categoryTitle} description="" />
      <Container className="my-10">
        <div className="my-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 text-darkColor">
            <div className="flex items-center h-[35px] gap-2">
              <LayoutGrid className="w-5 h-5" />
              <div className="flex items-center gap-1">
                <span>Hiển thị:</span>
                <span>{ITEMS_PER_PAGE}</span>
              </div>
            </div>
            <button className="flex items-center h-[35px] gap-2" onClick={() => setShow(!show)}>
              <SlidersHorizontal className="w-5 h-5" />
              Lọc sản phẩm
              <ChevronDown
                className={`w-4 h-4 transition-all duration-300 ${show ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center h-[35px]">
              Trang {currentPage} / {totalPages} — Tổng: {totalItems} sản phẩm
            </div>
            <div className="flex items-center h-[35px] gap-2">
              <span>Sắp xếp:</span>
              <Select value={selectedOption} onValueChange={(value) => handleSelectChange(value as SortByProduct)}>
                <SelectTrigger className="w-[120px] border-none shadow-none rounded-none border-b">
                  <SelectValue placeholder="Mặc định" className="text-darkColor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={SortByProduct.NEW}>Mới</SelectItem>
                  <SelectItem value={SortByProduct.HOT}>Nổi bật</SelectItem>
                  <SelectItem value={SortByProduct.MAX_PRICE}>Giá cao nhất</SelectItem>
                  <SelectItem value={SortByProduct.MIN_PRICE}>Giá thấp nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <FilterProduct show={show} setShow={setShow} onChangeFilters={(filter) => {setFilters(filter)}} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {currentData.map((item) => (
            <ProductCard key={item.id || `${item?.productCategory?.slug}-${item.name}`} product={item} />
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
