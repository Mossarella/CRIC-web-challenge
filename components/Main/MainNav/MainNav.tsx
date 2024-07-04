"use client";
import React from "react";
import joiner from "classnames";
import { useDrawer } from "@/contexts/CDrawer";
import { EDrawerData } from "@/enums/EDrawerData";

export default function MainNav({
  title,
  main,
}: {
  title: string;
  main: boolean;
}) {
  const buttons = [
    {
      id: 1,
      src: "/images/Filter.svg",
      label: EDrawerData.FILTER,
      buttonType: "normal",
    },
    {
      id: 2,
      src: "/images/Import.svg",
      label: EDrawerData.IMPORT,
      buttonType: "normal",
    },
    {
      id: 3,
      src: "/images/Export.svg",
      label: EDrawerData.EXPORT,
      buttonType: "normal",
    },
    {
      id: 4,
      src: "/images/New.svg",
      label: EDrawerData.NEW,
      buttonType: "success",
    },
  ];

  const {
    contextUpdateSignal,
    isOpen,
    drawerData,
    openDrawer,
    closeDrawer,
    currentFilter,
  } = useDrawer();

  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between p-0 gap-y-4 sm:gap-y-4 md:gap-y-0 lg:gap-y-0">
      <div className="flex items-center w-auto">
        <p className=" font-semibold text-2xl">{title}</p>
      </div>

      {main && (
        <div className="flex flex-row  justify-start items-center w-auto gap-x-4">
          {buttons.map((button) => {
            return (
              <button
                onClick={() => {
                  openDrawer({ label: button.label, src: button.src });
                }}
                key={button.id}
                className={joiner(
                  "btn rounded px-3 py-2 min-h-0 h-[33.6px] flex justify-center items-center shadow-sm",
                  button.buttonType === "normal"
                    ? Object.keys(currentFilter).length !== 0 &&
                      button.label === EDrawerData.FILTER
                      ? "btn-outline  btn-primary greenFilterImg hover:whiteFilter "
                      : "btn-outline border-gray-300 hover:whiteFilter"
                    : "btn-primary whiteFilter flex-1"
                )}
              >
                <img
                  className={joiner("w-4 h-4")}
                  src={button.src}
                  alt={button.label}
                />
                <p
                  className={joiner(
                    "",
                    button.buttonType === "normal"
                      ? "hidden sm:flex md:flex lg:flex"
                      : "flex"
                  )}
                >
                  {button.label}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
