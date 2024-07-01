import React from "react";

export default function DrawerTextArea({ label }: { label: string }) {
  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className="font-semibold text-xs uppercase">{label}</p>
      <textarea
        className="textarea px-[16px] py-[8px] textarea-bordered min-h-0 h-[76px]  text-sm"
        placeholder="Bio"
      ></textarea>
    </div>
  );
}
