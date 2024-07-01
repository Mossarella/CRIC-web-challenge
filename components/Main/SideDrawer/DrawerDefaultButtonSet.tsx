"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";

export default function DrawerDefaultButtonSet() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  return (
    <div className="flex flex-row justify-end">
      <button
        onClick={() => {
          closeDrawer();
        }}
        type="button"
        className="   py-2 min-h-0  flex justify-center items-center me-4 "
      >
        <p className="font-medium  text-sm">Cancel</p>
      </button>
    </div>
  );
}
