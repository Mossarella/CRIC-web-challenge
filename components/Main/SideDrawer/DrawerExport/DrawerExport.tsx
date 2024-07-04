import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerFilter/DrawerCheckbox";

export default function DrawerExport() {
  return (
    <div className=" w-full h-full gap-y-4 flex flex-col justify-center items-center opacity-50 cursor-pointer">
      <div className="w-10 h-10 relative">
        <img
          className=" w-full h-full "
          src="/images/Export.svg"
          alt=""
        />
      </div>

      <p className=" text-center">Placeholder for export data</p>
    </div>
  );
}
