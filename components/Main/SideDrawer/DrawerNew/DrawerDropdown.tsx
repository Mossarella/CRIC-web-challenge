"use client";
import React, { useEffect, useState } from "react";
import joiner from "classnames";
import { useDrawer } from "@/contexts/CDrawer";

export default function DrawerDropdown({
  label,
  defaultChoice,
  option,
  name,
  value,
  isDisable,
  isNew,
}: {
  label: string;
  defaultChoice: string;
  option?: any;
  name: string;
  value?: string;
  isDisable?: boolean;
  isNew?: boolean;
}) {
  const [selectedValue, setSelectedValue] = useState<string>("default");

  const { updateFormData } = useDrawer();

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
    updateFormData({ [name]: e.target.value });
  };

  useEffect(() => {
    if (!isNew) {
      setSelectedValue(value || "");
    }
  }, [value]);

  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className="font-semibold text-xs uppercase ">{label}</p>

      <select
        disabled={isDisable}
        name={name}
        className={joiner(
          "select select-bordered w-full  h-[38px] min-h-0  text-sm ",
          { transparentFont: selectedValue === "default" }
        )}
        value={selectedValue}
        onChange={handleChange}
      >
        <option
          className=" text-sm  "
          disabled
          value="default"
        >
          {defaultChoice}
        </option>
        {option.map((item: any) => {
          return (
            <option
              key={item.value}
              value={item.value}
              className=" text-sm"
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
