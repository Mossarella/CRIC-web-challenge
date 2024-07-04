"use client";

import React, {
  createContext,
  createServerContext,
  useContext,
  useState,
} from "react";

export const CDrawer = createContext<any>({});

export const DrawerProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerData, setDrawerData] = useState(null);
  const [formData, setFormData] = useState<any>({});
  const [currentFilter, setCurrentFilter] = useState({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const openDrawer = (data: any) => {
    setDrawerData(data);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setDrawerData(null);
    setFormData({});
    updateErrorMessage("");
  };

  const updateFormData = (newData: HTMLFormElement) => {
    setFormData((prevData: any) => ({
      ...prevData,
      ...newData,
    }));
  };

  const updateCurrentFilter = (filter: any) => {
    setCurrentFilter(filter);
  };

  const updateErrorMessage = (message: string) => {
    setErrorMessage(message);
  };

  const [contextUpdateSignal, setContextUpdateSignal] =
    useState<boolean>(false);

  const triggerUpdate = () => {
    setContextUpdateSignal((prevSignal) => !prevSignal); // Toggle signal
  };

  return (
    <CDrawer.Provider
      value={{
        isOpen,
        drawerData,
        openDrawer,
        closeDrawer,
        formData,
        updateFormData,
        triggerUpdate,
        contextUpdateSignal,
        updateCurrentFilter,
        currentFilter,
        errorMessage,
        updateErrorMessage,
      }}
    >
      {children}
    </CDrawer.Provider>
  );
};
export const useDrawer = () => useContext(CDrawer);
