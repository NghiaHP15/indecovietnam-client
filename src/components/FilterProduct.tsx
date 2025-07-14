import { categoryProduct, colorOptions, priceOptions, sizeOptions } from "@/constants/data";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const FilterProduct = ({ show, setShow }: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className={` ${show ? "max-h-[1000px]" : "max-h-0"} overflow-hidden border-b border-gray-200 transition-all duration-500`}>
        <div className="p-4 flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                <div>
                    <h3 className="mb-2">Danh mục sản phẩm</h3>
                    <div className="grid grid-rows-4 grid-flow-col gap-x-4 gap-y-2">
                        {categoryProduct.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Checkbox id={item?.id} />
                                <Label htmlFor={item?.id} className="text-darkColor cursor-pointer text-base font-normal">{item?.title}</Label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mb-2">Màu sản phẩm</h3>
                    <div className="grid grid-rows-4 grid-flow-col gap-x-0 gap-y-2">
                        {colorOptions.map((item, index) => (
                            <button key={index} className={`p-3 border border-gray-200 rounded-full h-4 w-4 ${item.code}`}></button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mb-2">Kích cỡ</h3>
                    <div className="grid grid-rows-4 grid-flow-col gap-x-0 gap-y-2">
                        {sizeOptions.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Checkbox id={item?.code} />
                                <Label htmlFor={item?.code} className="text-darkColor cursor-pointer text-base font-normal">{item?.size}</Label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mb-2">Giá sản phẩm</h3>
                    <div className="grid grid-rows-4 grid-flow-col gap-x-0 gap-y-2">
                        {priceOptions.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Checkbox id={item?.value} />
                                <Label htmlFor={item?.value} className="text-darkColor cursor-pointer text-base font-normal">{item?.title}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <button className="text-sm text-lightColor text-right font-medium mt-2 underline underline-offset-2 decoration-[1px]">Xóa bộ lọc</button>
                <button className="text-sm text-lightColor text-right font-medium mt-2 underline underline-offset-2 decoration-[1px]" onClick={() => setShow(false)}>Đóng bộ lọc</button>
            </div>
        </div>
    </div>
  );
};

export default FilterProduct;
