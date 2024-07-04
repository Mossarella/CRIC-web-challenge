import MainNav from "@/components/Main/MainNav/MainNav";
import MainTab from "@/components/Main/MainTab/MainTab";
import MainTable from "@/components/Main/MainTable/MainTable";
import MainTableButton from "@/components/Main/MainTableButton/MainTableButton";
import DrawerSide from "@/components/Main/SideDrawer/DrawerSide";
import { DrawerProvider } from "@/contexts/CDrawer";
import React from "react";

export default function DataMap() {
  return (
    <DrawerProvider>
      <DrawerSide></DrawerSide>
      <MainNav
        title="Data Mapping"
        main={true}
      ></MainNav>
      <MainTab></MainTab>
      <MainTableButton></MainTableButton>
      <MainTable></MainTable>
    </DrawerProvider>
  );
}
