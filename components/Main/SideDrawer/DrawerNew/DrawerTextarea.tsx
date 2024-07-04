"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useRef } from "react";

export default function DrawerTextArea({
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

  const textAreaRef = useRef<any>(null);
  useEffect(() => {
    if (value) {
      textAreaRef.current.value = value;
    }
  }, []);

  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className="font-semibold text-xs uppercase">{label}</p>
      <textarea
        ref={textAreaRef}
        disabled={isDisable}
        name={name}
        onChange={handleChange}
        className="textarea px-[16px] py-[8px] textarea-bordered min-h-0 h-[76px]  text-sm"
        placeholder="Insert description here"
      ></textarea>
    </div>
  );
}
