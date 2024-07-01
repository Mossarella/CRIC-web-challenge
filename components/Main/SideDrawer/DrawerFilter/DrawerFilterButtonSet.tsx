import React from "react";

export default function DrawerFilterButtonSet() {
  return (
    <div className="flex flex-row justify-end">
      <button
        type="button"
        className="   py-2 min-h-0  flex justify-center items-center me-4 "
      >
        <p className="font-medium  text-sm">Reset</p>
      </button>
      <button
        type="button"
        className="btn btn-primary rounded px-3 py-2 min-h-0 h-1/2 flex justify-center items-center shadow-sm  "
      >
        <p className="font-medium  text-sm">Apply Filter</p>
      </button>
    </div>
  );
}
