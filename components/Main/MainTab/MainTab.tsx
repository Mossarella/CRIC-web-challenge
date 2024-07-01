"use client";

import React, { useState } from "react";
import MainTableButton from "../MainTableButton/MainTableButton";
import MainTable from "../MainTable/MainTable";
import joiner from "classnames";

export default function MainTab() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const tabs = [
    { id: 1, label: "Data Mapping", icon: "/images/DataMapping.svg" },
    { id: 2, label: "Collection Sources", icon: "/images/Collection.svg" },
  ];

  return (
    <div
      role="tablist"
      className={joiner(
        " flex  items-center justify-stretch sm:justify-stretch md:justify-normal lg:justify-normal  tabs-bordered border-b-2 border-solid border-opacity-[20%]"
      )}
    >
      {tabs.map((tab) => (
        <a
          onClick={() => setActiveTab(tab.id)}
          key={tab.id}
          role="tab"
          className={joiner(
            "tab px-2 me-1 w-full sm:w-full md:w-auto lg:w-auto",
            activeTab === tab.id ? "tab-active" : "opacity-[0.3]"
          )}
        >
          <img
            className="min-w-[24px] min-h-[24px] me-2 hidden sm:flex md:flex lg:flex"
            src={tab.icon}
            alt={tab.label}
          />
          {tab.label}
        </a>
      ))}
    </div>
  );
}
