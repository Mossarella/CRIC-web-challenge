"use client";

import { useDrawer } from "@/contexts/CDrawer";
import { EDepartment } from "@/enums/EDepartment";
import { EDrawerData } from "@/enums/EDrawerData";
import { ESubjectType } from "@/enums/ESubjectType";

import style from "./MainTable.module.css";
import { mockDataMapping } from "@/public/mockDatas/mockDataMapping";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import qs from "qs";
import joiner from "classnames";
import { IDataMapping } from "@/interfaces/IDataMapping";

export default function MainTable() {
  const [selector, setSelector] = useState<any>();

  const [data, setData] = useState<IDataMapping[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    contextUpdateSignal,
    isOpen,
    drawerData,
    openDrawer,
    closeDrawer,
    currentFilter,
  } = useDrawer();

  useEffect(() => {
    FetchData(currentFilter);
    return () => {};
  }, [contextUpdateSignal]);

  const FetchData = async (filters: any) => {
    try {
      const response = await axios.get("/api/mappingData", {
        params: filters,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      });

      // const response = await mockDataMapping;

      setSelector(columns);
      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const selectorTitle = {
    name: "Title",
    selector: (row: any) => row.title,
    minWidth: "200px",
    sortable: true,

    id: 1,
  };
  const selectorDesc = {
    name: "Description",
    selector: (row: any) => row.desc,
    sortable: true,
    minWidth: "200px",

    id: 2,
  };
  const selectorDepartment = {
    name: "Departments",
    selector: (row: any) =>
      EDepartment[row.department as keyof typeof EDepartment],
    sortable: true,
    minWidth: "150px",

    id: 3,
  };
  const selectorSubjectType = {
    name: "Data Subject Types",
    selector: (row: any) =>
      ESubjectType[row.subjectType as keyof typeof ESubjectType],
    sortable: true,

    minWidth: "150px",
    textAlign: "start",
    // reorder:false

    id: 4,
  };
  const selectorActions = {
    name: "Actions",
    selector: (row: any) => (
      <div className="flex flex-row gap-x-8">
        <button
          title="Edit"
          onClick={() => {
            handleEdit(row.id);
          }}
          type="button"
        >
          <img
            src="/images/Edit2.svg"
            alt=""
          />
        </button>
        <button
          title="Delete"
          onClick={() => {
            handleDelete(row.id);
          }}
          type="button"
        >
          <img
            src="/images/Delete.svg"
            alt=""
          />
        </button>
      </div>
    ),

    sortable: false,

    minWidth: "98px",
    textAlign: "start",

    id: 5,
  };

  const handleDelete = async (id: number) => {
    openDrawer({ label: EDrawerData.DELETE, src: "/images/Delete.svg", id });
  };

  const handleEdit = async (id: number) => {
    openDrawer({ label: EDrawerData.EDIT, src: "/images/Edit2.svg", id });
  };

  const columns = [
    selectorTitle,
    selectorDesc,
    selectorDepartment,
    selectorSubjectType,
    selectorActions,
  ];

  if (isLoading) {
    return (
      <div className="flex-1 flex-col gap-y-2 text-center flex justify-center items-center opacity-50 w-full h-full">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex-col gap-y-2 text-center flex justify-center items-center opacity-50 w-full h-full">
        <p>Something went wrong :(</p>
      </div>
    );
  }

  return (
    <div className=" flex-1">
      <DataTable
        style={{}}
        className={joiner(" customScrollBar", style.customTable)}
        columns={selector}
        data={data}
        // defaultSortFieldId={1}

        noDataComponent={
          <div className="flex-1 flex-col gap-y-2 text-center flex justify-center items-center opacity-50 w-full h-full">
            <p>No record to display, Try create some!</p>
          </div>
        }
        pagination={data.length > 10}
        sortIcon={
          <img
            src="/images/Arrow.svg"
            alt="Sort Icon"
          />
        }
        // selectableRows
        highlightOnHover
        // striped
        // pointerOnHover
        fixedHeader
        // showPaginationBottom={data.length > 10 ? true : false}

        paginationPerPage={25}
        paginationComponentOptions={{
          selectAllRowsItem: true,
          selectAllRowsItemText: "All",
          rowsPerPageText: "",
          rangeSeparatorText: "from",
        }}
        paginationRowsPerPageOptions={[25, 50, 75, 100]}
      />
    </div>
  );
}
