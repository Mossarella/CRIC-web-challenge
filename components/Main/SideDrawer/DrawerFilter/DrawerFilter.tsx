"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect } from "react";
import DrawerCheckbox from "./DrawerCheckbox";
import DrawerSearchBar from "./DrawerSearchBar";
import { EDepartment } from "@/enums/EDepartment";
import { ESubjectType } from "@/enums/ESubjectType";

export default function DrawerFilter() {
  // const departmentTypeOptions = Object.values(EDepartment);
  // const subjectTypeOptions = Object.values(ESubjectType);

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

  const {
    contextUpdateSignal,
    isOpen,
    drawerData,
    openDrawer,
    closeDrawer,
    currentFilter,
  } = useDrawer();

  useEffect(() => {
    if (Object.keys(currentFilter).length !== 0) {
    }
  }, []);

  return (
    <>
      <form>
        <DrawerSearchBar
          value={currentFilter.title}
          name="title"
        ></DrawerSearchBar>
        <DrawerCheckbox
          value={currentFilter.department}
          name="department"
          label={"Department"}
          option={departmentTypeOptions}
        ></DrawerCheckbox>
        <DrawerCheckbox
          value={currentFilter.subjectType}
          name="subjectType"
          option={[
            { value: "null", label: "Not specify" },
            ...subjectTypeOptions,
          ]}
          label={"Data Subject"}
        ></DrawerCheckbox>
      </form>
    </>
  );
}
