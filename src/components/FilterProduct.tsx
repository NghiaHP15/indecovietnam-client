import React, { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { priceOptions, sizeOptions } from "@/constants/data";
import { Color, RoomCategory } from "@/constants/types";
import { getAllRooms } from "@/services/roomCategoryService";
import { getAllColors } from "@/services/colorService";

type FilterProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeFilters?: (filters: {
    category: string | null;
    color: string | null;
    size: string | null;
    price: string | null;
  }) => void;
};

const FilterProduct = ({ show, setShow, onChangeFilters }: FilterProps) => {
  const [categories, setCategories] = useState<RoomCategory[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllRooms();
        if (res.data.success) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchColors = async () => {
      try {
        const res = await getAllColors();
        if (res.data.success) {
          setColors(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    fetchColors();
  }, []);

  const handleToggle = (
    current: string | null,
    value: string,
    setFn: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (current === value) {
      setFn(null);
    } else {
      setFn(value);
    }
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedPrice(null);
  };

  useEffect(() => {
    onChangeFilters?.({
      category: selectedCategory,
      color: selectedColor,
      size: selectedSize,
      price: selectedPrice,
    });
  }, [selectedCategory, selectedColor, selectedSize, selectedPrice]);

  return (
    <div
      className={`${
        show ? "max-h-[1000px]" : "max-h-0"
      } overflow-hidden border-b border-gray-200 transition-all duration-500`}
    >
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Danh mục */}
          <div>
            <h3 className="mb-2">Danh mục sản phẩm</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-3">
              {categories.map((item) => (
                <div key={item.slug} className="flex items-center gap-3">
                  <Checkbox
                    id={`category-${item.slug}`}
                    checked={selectedCategory === item.slug}
                    onCheckedChange={() =>
                      handleToggle(selectedCategory, item.slug, setSelectedCategory)
                    }
                  />
                  <Label htmlFor={`category-${item.slug}`} className="text-base font-normal cursor-pointer">
                    {item.title}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Màu */}
          <div>
            <h3 className="mb-2">Màu sản phẩm</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-2">
              {colors.map((item) => (
                <button
                  key={item.code}
                  onClick={() =>
                    handleToggle(selectedColor, item.code, setSelectedColor)
                  }
                  className={`h-6 w-6 rounded-full border ${item.code} 1px solid #ccc ${selectedColor === item.code ? `border-3 border-light_brownish`: ""}`}
                  title={item.name}
                />
              ))}
            </div>
          </div>

          {/* Kích cỡ */}
          <div>
            <h3 className="mb-2">Kích cỡ</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-3">
              {sizeOptions.map((item) => (
                <div key={item.code} className="flex items-center gap-3">
                  <Checkbox
                    id={`size-${item.code}`}
                    checked={selectedSize === item.code}
                    onCheckedChange={() =>
                      handleToggle(selectedSize, item.code, setSelectedSize)
                    }
                  />
                  <Label htmlFor={`size-${item.code}`} className="text-base font-normal cursor-pointer">
                    {item.size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Giá */}
          <div>
            <h3 className="mb-2">Giá sản phẩm</h3>
            <div className="grid grid-rows-4 grid-flow-col gap-3">
              {priceOptions.map((item) => (
                <div key={item.value} className="flex items-center gap-3">
                  <Checkbox
                    id={`price-${item.value}`}
                    checked={selectedPrice === item.value}
                    onCheckedChange={() =>
                      handleToggle(selectedPrice, item.value, setSelectedPrice)
                    }
                  />
                  <Label htmlFor={`price-${item.value}`} className="text-base font-normal cursor-pointer">
                    {item.title}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hành động */}
        <div className="flex items-center justify-end gap-4">
          <button
            className="text-sm text-lightColor font-medium underline underline-offset-2"
            onClick={handleReset}
          >
            Xóa bộ lọc
          </button>
          <button
            className="text-sm text-lightColor font-medium underline underline-offset-2"
            onClick={() => setShow(false)}
          >
            Đóng bộ lọc
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
