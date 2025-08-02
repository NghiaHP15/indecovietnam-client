"use client";

import { Address } from "@/constants/types";
import { deleteAddress } from "@/services/addressSerive";
import { Loader, X } from "lucide-react";
import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import useStore from "../../store";

const AddressCard = ({
  item,
  onChange,
}: {
  item: Address;
  onChange?: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const { address, addAddress } = useStore();

  const handleRemove = async (id: string) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await deleteAddress({ id });
      if (res.data.success) {
        onChange?.(); // callback reload
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data: Address) => {
    addAddress(data);
  }

  return (
    <div className="text-sm border border-gray-200 p-2 rounded-2xl relative">
      <div className="px-4 py-2 flex items-center justify-between bg-light_brownish/30 rounded-t-lg rounded-b-[2px]">
        <span>
          {item.receiver_name} {item.default ? "(Mặc định)" : ""}
        </span>
        <X
          className="w-4 h-4 cursor-pointer"
          onClick={() => handleRemove(item?.id || "")}
        />
      </div>
      <div className="p-4 flex items-center gap-2">
        <Checkbox id={item?.id} checked={address?.id === item?.id} onCheckedChange={() => handleUpdate(item)} />
        <Label htmlFor={item?.id} className="cursor-pointer">
          Địa chỉ: {item.address_line}, {item.ward}, {item.district}, {item.city}
        </Label>
      </div>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 rounded-2xl flex items-center justify-center z-10">
          <Loader className="animate-spin" size={14} strokeWidth={2} />
        </div>
      )}
    </div>
  );
};

export default AddressCard;
