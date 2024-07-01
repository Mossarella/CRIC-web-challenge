import Breadcrumb from "@/components/Main/Breadcrumb/Breadcrumb";
import MainNav from "@/components/Main/MainNav/MainNav";
import MainTab from "@/components/Main/MainTab/MainTab";
import MainTable from "@/components/Main/MainTable/MainTable";
import MainTableButton from "@/components/Main/MainTableButton/MainTableButton";
import Nav from "@/components/Nav/Nav";
import NewDataPopup from "@/components/Main/SideDrawer/DrawerSide";
import { CDrawer, DrawerProvider, useDrawer } from "@/contexts/CDrawer";
import Image from "next/image";
import DrawerSide from "@/components/Main/SideDrawer/DrawerSide";

export default function Home() {
  return (
    <DrawerProvider>
      <div className=" relative bg-[var(--grey)]  p-6 flex flex-col gap-y-4 h-full shadow-inner smooth w-full">
        <DrawerSide></DrawerSide>
        <Breadcrumb></Breadcrumb>
        <MainNav></MainNav>
        <MainTab></MainTab>
        <MainTableButton></MainTableButton>
        <MainTable></MainTable>
      </div>
    </DrawerProvider>
  );
}
