"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useState } from "react";
import DrawerCheckbox from "./DrawerFilter/DrawerCheckbox";
import { EDrawerData } from "@/enums/EDrawerData";
import DrawerFilter from "./DrawerFilter/DrawerFilter";
import DrawerNew from "./DrawerNew/DrawerNew";
import DrawerImport from "./DrawerImport/DrawerImport";
import DrawerExport from "./DrawerExport/DrawerExport";
import DrawerFilterButtonSet from "./DrawerFilter/DrawerFilterButtonSet";
import DrawerNewButtonSet from "./DrawerNew/DrawerNewButtonSet";
import joiner from "classnames";
import DrawerExportButtonSet from "./DrawerExport/DrawerExportButtonSet";
import DrawerImportButtonSet from "./DrawerImport/DrawerImportButtonSet";
import DrawerEdit from "./DrawerEdit/DrawerEdit";
import DrawerDelete from "./DrawerDelete/DrawerDelete";
import DrawerEditButtonSet from "./DrawerEdit/DrawerEditButtonSet";
import DrawerDeleteButtonSet from "./DrawerDelete/DrawerDeleteButtonSet";

export default function DrawerSide() {
  const { isOpen, drawerData, closeDrawer, errorMessage } = useDrawer();
  const [animate, setAnimate] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(isOpen);
  const [currentDrawerData, setCurrentDrawerData] = useState(drawerData);
  const [errorAnimationKey, setErrorAnimationKey] = useState<number>(0);

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
      case EDrawerData.EDIT:
        return <DrawerEdit id={currentDrawerData.id} />;
      case EDrawerData.DELETE:
        return <DrawerDelete id={currentDrawerData.id} />;
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
      case EDrawerData.EXPORT:
        return <DrawerExportButtonSet />;
      case EDrawerData.IMPORT:
        return <DrawerImportButtonSet />;
      case EDrawerData.EDIT:
        return <DrawerEditButtonSet id={currentDrawerData.id} />;
      case EDrawerData.DELETE:
        return <DrawerDeleteButtonSet id={currentDrawerData.id} />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    setErrorAnimationKey((prevKey) => prevKey + 1);
  }, [errorMessage]);

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
      }, 160);
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
          "w-screen h-dvh fixed flex justify-end top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-50 overflow-hidden"
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={joiner(
            "  rounded-t-lg sm:rounded-t-none w-full sm:w-[350px] mt-[64px] sm:mt-0 h-auto sm:h-full  bg-white  flex flex-col z-[51] smooth transition-transform duration-300",
            animate
              ? " bottom-0 sm:bottom-auto sm:right-0 "
              : "bottom-[-100%] sm:bottom-auto sm:right-[-350px]"
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
          {errorMessage && (
            <div
              key={errorAnimationKey}
              className=" flex flex-col  justify-center px-6 py-4 gap-y-4"
            >
              <p className="shake text-base text-red-600">
                {errorMessage.toString()}
              </p>
            </div>
          )}
          {renderContent()}
        </div>
      </div>
    </>
  );
}
