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
    <>
      <MainNav
        title="Home page"
        main={false}
      ></MainNav>
      <div className=" flex-1 flex-col gap-y-2 text-center flex justify-center items-center opacity-50 w-full h-full">
        <div className="w-20 h-20 relative">
          <img
            className=" w-full h-full "
            src="/images/Home.svg"
            alt=""
          />
        </div>
        <p>Placeholder for Home page</p>
      </div>
    </>
  );
}
