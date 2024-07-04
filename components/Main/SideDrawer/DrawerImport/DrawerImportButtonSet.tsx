"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";

export default function DrawerImportButtonSet() {
  const { isOpen, drawerData, openDrawer, closeDrawer, formData } = useDrawer();

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
      <button
        type="button"
        className="btn btn-primary rounded px-3 py-2 min-h-0 h-1/2 flex justify-center items-center shadow-sm  "
      >
        <p className="font-medium  text-sm">Import</p>
      </button>
    </div>
  );
}
