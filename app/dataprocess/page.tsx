import MainNav from "@/components/Main/MainNav/MainNav";
import React, { Suspense } from "react";
import LoadingPage from "../loading";

export default function DataProcess() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <MainNav
          title="Data Processors"
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
          <p>Placeholder for Data Processors page</p>
        </div>
      </Suspense>
    </>
  );
}
