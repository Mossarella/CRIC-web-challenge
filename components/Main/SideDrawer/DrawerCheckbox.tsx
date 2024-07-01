import React from "react";

export default function DrawerCheckbox({
  label,
  option,
}: {
  label: string;
  option?: any;
}) {
  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className=" font-semibold opacity-50 text-xs uppercase">{label}</p>
      <div className="form-control ">
        <label className="label cursor-pointer justify-normal p-0">
          <input
            type="checkbox"
            // defaultChecked
            className=" border-black shadow-sm checkbox checkbox-primary me-4 w-4 h-4 rounded"
          />
          <span className=" font-normal  text-sm">Remember me</span>
        </label>
        {/* //TODO map */}
      </div>
    </div>
  );
}
