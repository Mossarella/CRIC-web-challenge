"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerCheckbox";

export default function DrawerFilter() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <div className="flex flex-row  border-black border-b border-opacity-10 justify-between items-center h-[64px] px-6">
        <label className=" flex items-center">
          <img
            className="w-4 h-4 me-4"
            src="/images/Search.svg"
            alt=""
          />

          <input
            type="text"
            className="grow text-sm"
            placeholder="Search filter"
          />
        </label>
      </div>
      <DrawerCheckbox
        label={"Department"}
        option
      ></DrawerCheckbox>
      <DrawerCheckbox label={"Data Subject"}></DrawerCheckbox>
    </>
  );
}
