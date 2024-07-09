"use client";

import { useDrawer } from "@/contexts/CDrawer";
import axios from "axios";
import React from "react";

export default function DrawerEditButtonSet({ id }: { id: number }) {
  const {
    isOpen,
    drawerData,
    openDrawer,
    closeDrawer,
    formData,
    triggerUpdate,
    updateErrorMessage,
    updateFormData,
  } = useDrawer();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/mappingData/${id}`, {
        title: formData.title,
        department: formData.department,
        desc: formData.desc,
        subjectType: formData.subjectType,
      });

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
          closeDrawer();
        }}
        type="button"
        className="   py-2 min-h-0  flex justify-center items-center me-4 "
      >
        <p className="font-medium  text-sm">Cancel</p>
      </button>
      <button
        onClick={handleSave}
        type="button"
        className="btn btn-primary rounded px-3 py-2 min-h-0 h-1/2 flex justify-center items-center shadow-sm "
      >
        <p className="font-medium  text-sm">Update</p>
      </button>
    </div>
  );
}
