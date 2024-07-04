"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useState } from "react";
import DrawerCheckbox from "../DrawerFilter/DrawerCheckbox";

import { EDepartment } from "@/enums/EDepartment";
import { ESubjectType } from "@/enums/ESubjectType";
import DrawerInput from "../DrawerNew/DrawerInput";
import DrawerTextArea from "../DrawerNew/DrawerTextarea";
import DrawerDropdown from "../DrawerNew/DrawerDropdown";
import axios from "axios";
import { IDataMapping } from "@/interfaces/IDataMapping";

export default function DrawerDelete({ id }: { id: number }) {
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

  useEffect(() => {
    FetchData();
  }, []);

  const [data, setData] = useState<IDataMapping>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const FetchData = async () => {
    try {
      const response = await axios.get(`/api/mappingdata/${id}`);

      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {data && (
        <form>
          <DrawerInput
            name="title"
            label="Title"
            isDisable={true}
            value={data.title}
          ></DrawerInput>

          <DrawerTextArea
            name="desc"
            label="Description"
            isDisable={true}
            value={data.desc}
          ></DrawerTextArea>
          <DrawerDropdown
            name="department"
            value={data.department}
            defaultChoice="Select Department"
            option={departmentTypeOptions}
            label="Department"
            isDisable={true}
          ></DrawerDropdown>
          <DrawerDropdown
            name="subjectType"
            isDisable={true}
            defaultChoice="Select Data Subject Type"
            option={[
              { value: "", label: "Not specify" },
              ...subjectTypeOptions,
            ]}
            label="Data Subject Type (Optional)"
            value={data.subjectType}
          ></DrawerDropdown>
        </form>
      )}
    </>
  );
}
