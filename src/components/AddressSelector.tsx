"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Address } from "@/constants/types";
import { createAddress } from "@/services/addressSerive";
import useStore from "../../store";
import LocationSelector from "./LocationSelector";

const initialAddress: Address = {
  receiver_name: "",
  phone: "",
  address_line: "",
  ward: "",
  district: "",
  city: "",
  default: false,
};

const AddressSelector = ({ onChange }: { onChange?: () => void }) => {
  const [data, setData] = useState<Address>(initialAddress);
  const [location, setLocation] = useState({
    city: "",
    district: "",
    ward: "",
    cityName: "",
    districtName: "",
    wardName: "",
  });

  const [loading, setLoading] = useState(false);
  const { user } = useStore();

  const handleChange = (name: keyof Address, value: string | boolean) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setData(initialAddress);
    setLocation({
      city: "",
      district: "",
      ward: "",
      cityName: "",
      districtName: "",
      wardName: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user?.id) return;

    const payload = {
      ...data,
      city: location.cityName,
      district: location.districtName,
      ward: location.wardName,
      customer: { id: user.id },
    };

    try {
      setLoading(true);
      const res = await createAddress(payload);
      if (res.data.success) {
        onChange?.();
        resetForm();
      }
    } catch (err) {
      console.error("Create address failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 border p-4 border-gray-200 rounded-2xl">
        {/* Người nhận */}
        <div>
          <label className="text-sm mb-1 block">Người nhận</label>
          <Input
            required
            value={data.receiver_name}
            onChange={(e) => handleChange("receiver_name", e.target.value)}
            placeholder="Người nhận"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="text-sm mb-1 block">Số điện thoại</label>
          <Input
            required
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Số điện thoại"
          />
        </div>

        {/* Chọn địa chỉ */}
        <div className="col-span-2">
          <label className="text-sm mb-1 block">Địa chỉ</label>
          <LocationSelector value={location} onChange={setLocation} />
        </div>

        {/* Địa chỉ cụ thể */}
        <div className="col-span-2">
          <label className="text-sm mb-1 block">Địa chỉ cụ thể</label>
          <Textarea
            value={data.address_line}
            onChange={(e) => handleChange("address_line", e.target.value)}
            placeholder="Địa chỉ cụ thể"
          />
        </div>

        {/* Địa chỉ mặc định */}
        <div className="col-span-2 flex items-center space-x-2">
          <Switch
            id="is-default"
            checked={data.default}
            onCheckedChange={(checked) => handleChange("default", checked)}
          />
          <Label htmlFor="is-default" className="text-sm font-normal">
            Địa chỉ mặc định
          </Label>
        </div>

        {/* Nút submit */}
        <div className="col-span-2 flex justify-end">
          <Button type="submit" isLoading={loading}>
            Thêm địa chỉ
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddressSelector;
