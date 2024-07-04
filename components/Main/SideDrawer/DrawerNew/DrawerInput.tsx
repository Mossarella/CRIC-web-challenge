"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useRef } from "react";

export default function DrawerInput({
  label,
  name,
  value,
  isDisable,
}: {
  label: string;
  name: string;
  value?: string;
  isDisable?: boolean;
}) {
  const { updateFormData } = useDrawer();

  const handleChange = (e: any) => {
    updateFormData({ [name]: e.target.value });
  };

  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (value) {
      inputRef.current.value = value;
    }
  }, []);

  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className=" font-semibold text-xs uppercase">{label}</p>

      <input
        ref={inputRef}
        disabled={isDisable}
        // value={value ? value : ""}
        name={name}
        onChange={handleChange}
        type="text"
        placeholder="Insert Title here"
        className="input input-bordered w-full max-w-xs h-[38px] text-sm"
      />
    </div>
  );
}
