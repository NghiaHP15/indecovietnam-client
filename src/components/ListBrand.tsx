import React from "react";
import { Brand } from "../../sanity.types";
import { Title } from "./ui/text";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface Props {
  brands: Brand[];
  selectedBrand: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const ListBrand = ({brands, selectedBrand, setSelectedBrand}: Props) => {
  return (
    <div className="w-full bg-white p-5">
        <Title className="text-base font-black">Product Categories</Title>
        <RadioGroup value={selectedBrand || ""} className="mt-2">
          {brands.map((item) => (
            <div 
              key={item?._id}
              onClick={() => setSelectedBrand(item?.slug?.current as string)}
              className="flex items-center space-x-2 hover:cursor-pointer"
            >
              <RadioGroupItem
                value={item?.slug?.current as string}
                key={item?._id}
                className="rounded-sm"
              />
              <Label
                htmlFor={item._id}
                className={`${selectedBrand === item?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
              >
                {item?.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {selectedBrand && (
          <button 
            onClick={() => setSelectedBrand(null)}
            className="text-sm text-left font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
          >
            Reset selection
          </button>
        )}
    </div>
  );
};

export default ListBrand;
