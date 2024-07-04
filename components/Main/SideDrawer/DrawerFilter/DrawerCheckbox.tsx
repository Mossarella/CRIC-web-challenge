"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect } from "react";

export default function DrawerCheckbox({
  label,
  option,
  name,
  value,
}: {
  label: string;
  option?: any;
  name: string;
  value?: string[];
}) {
  const { updateFormData, formData } = useDrawer();

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    let updatedOptions = [...(formData[name] || [])];
    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((item) => item !== value);
    }
    updateFormData({ [name]: updatedOptions });
  };

  useEffect(() => {
    if (value && value.length > 0) {
      updateFormData({ [name]: value });
    }
  }, [value]);

  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className=" font-semibold opacity-50 text-xs uppercase">{label}</p>
      <div className="form-control gap-y-4 ">
        {option.map((item: any) => (
          <label
            key={item.value}
            className="label cursor-pointer justify-normal p-0"
          >
            <input
              type="checkbox"
              value={item.value}
              checked={formData[name]?.includes(item.value) || false}
              onChange={handleChange}
              className="border-black shadow-sm checkbox checkbox-primary me-4 w-4 h-4 rounded"
            />
            <span className="font-normal text-sm">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
