import MainNav from "@/components/Main/MainNav/MainNav";
import React from "react";

export default function Employee() {
  return (
    <>
      <MainNav
        title="Employee Awareness"
        main={false}
      ></MainNav>
      <div className=" flex-1 flex-col gap-y-2 text-center flex justify-center items-center opacity-50 w-full h-full">
        <div className="w-20 h-20 relative">
          <img
            className=" w-full h-full "
            src="/images/Info.svg"
            alt=""
          />
        </div>
        <p>Placeholder for Employee Awareness page</p>
      </div>
    </>
  );
}
