import React from "react";

export default function DrawerInput({ label }: { label: string }) {
  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className=" font-semibold text-xs uppercase">{label}</p>

      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs h-[38px] text-sm"
      />
    </div>
  );
}
