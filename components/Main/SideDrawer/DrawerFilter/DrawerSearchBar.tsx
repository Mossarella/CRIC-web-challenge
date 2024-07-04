import { useDrawer } from "@/contexts/CDrawer";
import React, { useEffect, useRef } from "react";

export default function DrawerSearchBar({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  const { isOpen, drawerData, openDrawer, closeDrawer, updateFormData } =
    useDrawer();

  const handleChange = (e: any) => {
    updateFormData({ [name]: e.target.value });
  };

  const searchBarRef = useRef<any>(null);

  useEffect(() => {
    if (value) {
      searchBarRef.current.value = value;
    }
  }, []);

  return (
    <div className="flex flex-row  border-black border-b border-opacity-10 justify-between items-center h-[64px] px-6">
      <label className=" flex items-center">
        <img
          className="w-4 h-4 me-4"
          src="/images/Search.svg"
          alt=""
        />

        <input
          ref={searchBarRef}
          name={name}
          onChange={handleChange}
          type="text"
          className="grow text-sm"
          placeholder="Search title"
        />
      </label>
    </div>
  );
}
