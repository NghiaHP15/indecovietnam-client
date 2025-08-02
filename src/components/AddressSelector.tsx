/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import provinceApi from "@/lib/provinceAPI";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Address } from "@/constants/types";
import { createAddress } from "@/services/addressSerive";
import useStore from "../../store";

const AddressSelector = ({ onChange }: { onChange?: () => void }) => {
  const [data, setData] = useState<Address>({
    receiver_name: "",
    address_line: "",
    ward: "",
    district: "",
    city: "",
    default: false,
  });

  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedWard, setSelectedWard] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useStore();

  useEffect(() => {
    provinceApi.get("/p/").then((res) => setProvinces(res.data));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      provinceApi
        .get(`/p/${selectedProvince}?depth=2`)
        .then((res) => setDistricts(res.data.districts || []));
      setSelectedDistrict("");
      setWards([]);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      provinceApi
        .get(`/d/${selectedDistrict}?depth=2`)
        .then((res) => setWards(res.data.wards || []));
      setSelectedWard("");
    }
  }, [selectedDistrict]);

  const handleChange = (value: string | boolean, name: string) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user?.id) return;

    const _data = {
      ...data,
      city: provinces.find((p) => p.code.toString() === selectedProvince)?.name || "",
      district: districts.find((d) => d.code.toString() === selectedDistrict)?.name || "",
      ward: wards.find((w) => w.code.toString() === selectedWard)?.name || "",
      customer: { id: user.id },
    };

    try {
      setLoading(true);
      const res = await createAddress(_data);
      if (res.data.success) {
        onChange?.(); // callback reload
        setData({
          receiver_name: "",
          address_line: "",
          ward: "",
          district: "",
          city: "",
          default: false,
        });
        setSelectedProvince("");
        setSelectedDistrict("");
        setSelectedWard("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 border p-4 border-gray-200 rounded-2xl">
        <div>
          <label className="text-sm mb-1 block">Người nhận</label>
          <Input
            required
            value={data.receiver_name}
            onChange={(e) => handleChange(e.target.value, "receiver_name")}
            placeholder="Người nhận"
          />
        </div>

        <div>
          <label className="text-sm mb-1 block">Tỉnh / Thành phố</label>
          <Select value={selectedProvince} onValueChange={setSelectedProvince} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn tỉnh / thành phố" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {provinces.map((province) => (
                  <SelectItem key={province.code} value={province.code.toString()}>
                    {province.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm mb-1 block">Quận / Huyện</label>
          <Select
            value={selectedDistrict}
            onValueChange={setSelectedDistrict}
            disabled={!selectedProvince}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn quận / huyện" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {districts.map((district) => (
                  <SelectItem key={district.code} value={district.code.toString()}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm mb-1 block">Xã / Phường</label>
          <Select
            value={selectedWard}
            onValueChange={setSelectedWard}
            disabled={!selectedDistrict}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn xã / phường" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {wards.map((ward) => (
                  <SelectItem key={ward.code} value={ward.code.toString()}>
                    {ward.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2">
          <label className="text-sm mb-1 block">Địa chỉ cụ thể</label>
          <Textarea
            value={data.address_line}
            onChange={(e) => handleChange(e.target.value, "address_line")}
            placeholder="Địa chỉ cụ thể"
            className="w-full"
            required
          />
        </div>

        <div className="col-span-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="is-default"
              checked={data.default}
              onCheckedChange={(checked) => handleChange(checked, "default")}
            />
            <Label htmlFor="is-default" className="text-sm font-normal">
              Địa chỉ mặc định
            </Label>
          </div>
        </div>

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
