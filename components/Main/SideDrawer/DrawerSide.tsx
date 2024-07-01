"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useState } from "react";
import DrawerCheckbox from "./DrawerCheckbox";
import { EDrawerData } from "@/enums/EDrawerData";
import DrawerFilter from "./DrawerFilter/DrawerFilter";
import DrawerNew from "./DrawerNew/DrawerNew";
import DrawerImport from "./DrawerImport/DrawerImport";
import DrawerExport from "./DrawerExport/DrawerExport";
import DrawerFilterButtonSet from "./DrawerFilter/DrawerFilterButtonSet";
import DrawerNewButtonSet from "./DrawerNew/DrawerNewButtonSet";
import DrawerDefaultButtonSet from "./DrawerDefaultButtonSet";
import joiner from "classnames";

export default function DrawerSide() {
  const { isOpen, drawerData, closeDrawer } = useDrawer();
  const [animate, setAnimate] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(isOpen);
  const [currentDrawerData, setCurrentDrawerData] = useState(drawerData);

  const renderContent = () => {
    switch (currentDrawerData.label) {
      case EDrawerData.FILTER:
        return <DrawerFilter />;
      case EDrawerData.NEW:
        return <DrawerNew />;
      case EDrawerData.IMPORT:
        return <DrawerImport />;
      case EDrawerData.EXPORT:
        return <DrawerExport />;
      default:
        return <></>; // Return null or default content if none of the cases match
    }
  };

  const renderButtonSet = () => {
    switch (currentDrawerData.label) {
      case EDrawerData.FILTER:
        return <DrawerFilterButtonSet />;
      case EDrawerData.NEW:
        return <DrawerNewButtonSet />;
      default:
        return <DrawerDefaultButtonSet />;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentDrawerData(drawerData);
      setShouldRender(true);
      setTimeout(() => {
        setAnimate(true);
      }, 10);
    } else {
      setAnimate(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 150);
    }
  }, [isOpen, drawerData]);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => {
          closeDrawer();
        }}
        className={joiner(
          "w-screen h-dvh fixed flex justify-end top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-50 overflow-x-hidden"
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={joiner(
            "bg-white w-[350px] h-full flex flex-col z-[51] smooth transition-transform duration-300",
            animate ? "right-0" : "right-[-350px]"
          )}
        >
          <div className="flex flex-row justify-between items-center h-[64px] px-6 border-black border-b border-opacity-10">
            <div className="flex flex-row justify-start items-center">
              <img
                className="w-4 h-4 me-4"
                src={currentDrawerData.src}
                alt=""
              />
              <p className="font-semibold text-base">
                {currentDrawerData.label}
              </p>
            </div>
            {renderButtonSet()}
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );
}
