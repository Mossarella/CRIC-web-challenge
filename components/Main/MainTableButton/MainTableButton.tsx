"use client";

import React, { useState } from "react";
import MainTable from "../MainTable/MainTable";
import joiner from "classnames";

export default function MainTableButton() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const buttons = [
    {
      id: 1,
      src: "/images/Edit.svg",
      label: "Edit",
      buttonType: "success",
    },
    {
      id: 2,
      src: "/images/View.svg",
      label: "Visualize",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveButton(button.id)}
            className={joiner(
              "btn btn-outline rounded px-3 py-2 min-h-0 h-[33.6px] flex justify-center items-center me-4 shadow-sm  ",

              activeButton === button.id
                ? "btn-primary greenFilterImg hover:whiteFilter"
                : "btn-default border-gray-300 hover:whiteFilter"
            )}
          >
            <img
              className="w-4 h-4"
              src={button.src}
              alt={button.label}
            />
            <p className={joiner(" ")}>{button.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
