"use client";

import { useDrawer } from "@/contexts/CDrawer";
import axios from "axios";
import React from "react";

export default function DrawerFilterButtonSet() {
  const {
    isOpen,
    drawerData,
    openDrawer,
    closeDrawer,
    formData,
    triggerUpdate,
    updateCurrentFilter,
    currentFilter,
    updateErrorMessage,
  } = useDrawer();

  const handleFilter = async (e: any) => {
    const filters = {
      title: formData?.title,
      department: formData?.department,
      subjectType: formData?.subjectType,
    };

    e.preventDefault();
    try {
      await updateCurrentFilter(filters);

      await closeDrawer();
      await triggerUpdate();
    } catch (error: any) {
      updateErrorMessage(error.response.data.error) as string;
    }
  };

  const handleResetFilter = async (e: any) => {
    try {
      await updateCurrentFilter({});

      await closeDrawer();
      await triggerUpdate();
    } catch (error: any) {
      updateErrorMessage(error.response.data.error) as string;
    }
  };

  return (
    <div className="flex flex-row justify-end">
      <button
        onClick={(e) => {
          handleResetFilter(e);
        }}
        type="button"
        className="   py-2 min-h-0  flex justify-center items-center me-4 "
      >
        <p className="font-medium  text-sm">Reset</p>
      </button>
      <button
        onClick={(e) => {
          handleFilter(e);
        }}
        type="button"
        className="btn btn-primary rounded px-3 py-2 min-h-0 h-1/2 flex justify-center items-center shadow-sm  "
      >
        <p className="font-medium  text-sm">Apply Filter</p>
      </button>
    </div>
  );
}
