"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerFilter/DrawerCheckbox";

export default function DrawerImport() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  return (
    <div className=" w-full h-full gap-y-4 flex flex-col justify-center items-center opacity-50 cursor-pointer">
      <div className="w-10 h-10 relative">
        <img
          className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]"
          src="/images/New.svg"
          alt=""
        />
        <img
          className=" w-full h-full "
          src="/images/Import.svg"
          alt=""
        />
      </div>

      <p className=" text-center">
        Click here to import data <br />
        or <span className=" italic">drop files</span> here
      </p>
    </div>
  );
}
