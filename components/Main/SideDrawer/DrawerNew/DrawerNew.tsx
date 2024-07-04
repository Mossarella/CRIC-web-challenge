"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerFilter/DrawerCheckbox";

import DrawerInput from "./DrawerInput";
import DrawerTextArea from "./DrawerTextarea";
import { EDepartment } from "@/enums/EDepartment";
import { ESubjectType } from "@/enums/ESubjectType";
import DrawerDropdown from "./DrawerDropdown";

export default function DrawerNew() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  const departmentKeys = Object.keys(EDepartment) as Array<
    keyof typeof EDepartment
  >;

  const departmentTypeOptions = departmentKeys.map((key) => {
    return {
      value: key,
      label: EDepartment[key],
    };
  });
  const subjectTypeKeys = Object.keys(ESubjectType) as Array<
    keyof typeof ESubjectType
  >;

  const subjectTypeOptions = subjectTypeKeys.map((key) => {
    return {
      value: key,
      label: ESubjectType[key],
    };
  });

  return (
    <>
      <form>
        <DrawerInput
          name="title"
          label="Title"
        ></DrawerInput>

        <DrawerTextArea
          name="desc"
          label="Description"
        ></DrawerTextArea>
        <DrawerDropdown
          isNew={true}
          name="department"
          defaultChoice="Select Department"
          option={departmentTypeOptions}
          label="Department"
        ></DrawerDropdown>
        <DrawerDropdown
          isNew={true}
          name="subjectType"
          defaultChoice="Select Data Subject Type"
          option={[{ value: "", label: "Not specify" }, ...subjectTypeOptions]}
          label="Data Subject Type (Optional)"
        ></DrawerDropdown>
      </form>
    </>
  );
}
