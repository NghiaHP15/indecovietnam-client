import React from "react";
import { contact } from "@/constants/data";
import { ContactItemData } from "@/constants/types";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
        {contact?.map((item) => (
            <ContactItem key={item?.title} item={item} />
        ))}
    </div>
  );
};

const ContactItem = ({ item }: { item: ContactItemData }) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4">
        {item?.icon}
        <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black">{item?.title}</h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900">{item?.subtitle}</p>
        </div>
    </div>
  );
};

export default FooterTop;
