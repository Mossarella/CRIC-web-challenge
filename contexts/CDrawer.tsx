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

  const openDrawer = (data: any) => {
    setDrawerData(data);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setDrawerData(null);
  };

  return (
    <CDrawer.Provider value={{ isOpen, drawerData, openDrawer, closeDrawer }}>
      {children}
    </CDrawer.Provider>
  );
};
export const useDrawer = () => useContext(CDrawer);
