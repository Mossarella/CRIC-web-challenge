"use client";

import { IDataMapping } from "@/interface/IDataMapping";
import { mockDataMapping } from "@/public/mockDatas/mockDataMapping";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function MainTable() {
  const [selector, setSelector] = useState<any>();

  const [data, setData] = useState<IDataMapping[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    FetchData();
    return () => {};
  }, []);

  const FetchData = async () => {
    try {
      //   const response = await axios.get("/api/products");
      const response = await mockDataMapping;

      setSelector(columns);
      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const selectorTitle = {
    name: "Title",
    selector: (row) => row.title,
    width: "60px",
    sortable: true,

    id: 1,
  };
  const selectorDesc = {
    name: "Description",
    selector: (row) => row.desc,
    sortable: true,

    minwidth: "200px",
    id: 2,
  };
  const selectorDepartment = {
    name: "Departments",
    selector: (row) => row.department,
    sortable: true,

    minwidth: "200px",
    id: 3,
  };
  const selectorSubjectType = {
    name: "Data Subject Types",
    selector: (row) => row.subjectType,
    sortable: true,

    minwidth: "250px",
    textAlign: "start",

    id: 4,
  };

  const columns = [
    selectorTitle,
    selectorDepartment,
    selectorDesc,
    selectorSubjectType,
  ];

  //   useEffect(() => {
  //     setSelector(category);
  //   }, [category]);

  const ShowError = () => {
    return (
      <div>
        <p>Error : {error}</p>
      </div>
    );
  };
  const ShowLoading = () => {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  };

  if (error) {
    ShowError();
  } else if (isLoading) {
    ShowLoading();
  } else {
    return (
      <div className="">
        <DataTable
          style={{}}
          className=" customScrollBar"
          columns={selector}
          data={data}
          defaultSortFieldId={1}
          noDataComponent="No record to display :("
          pagination
          sortIcon="/images/Search.svg"
          // selectableRows
          highlightOnHover
          // striped
          pointerOnHover
          fixedHeader
          showPaginationBottom={data.length > 10 ? true : false}
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
}
