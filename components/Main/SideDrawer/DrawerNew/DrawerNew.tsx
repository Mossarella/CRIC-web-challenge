"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerCheckbox";
import DrawerTextArea from "../DrawerTextArea";
import DrawerInput from "../DrawerInput";
import DrawerDropdown from "../DrawerDropdown";

export default function DrawerNew() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      {/* <div className="flex flex-col  justify-center px-6 py-4 gap-y-4"> */}
      <DrawerInput label="Title"></DrawerInput>

      <DrawerTextArea label="Description"></DrawerTextArea>
      <DrawerDropdown
        defaultChoice="Select Department"
        option={[]}
        label="Department"
      ></DrawerDropdown>
      <DrawerDropdown
        defaultChoice="Select Data Subject Type"
        option={["dog", "cat"]}
        label="Data Subject Type (Optional)"
      ></DrawerDropdown>
      {/* </div> */}
      {/* <div className="flex flex-row  border-black border-b border-opacity-10 justify-between items-center h-[64px] px-6">
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
      <DrawerCheckbox label={"Data Subject"}></DrawerCheckbox> */}
    </>
  );
}
