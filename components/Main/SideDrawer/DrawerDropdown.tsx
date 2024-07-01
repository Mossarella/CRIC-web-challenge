import React, { useEffect, useState } from "react";
import joiner from "classnames";

export default function DrawerDropdown({
  label,
  defaultChoice,
  option,
}: {
  label: string;
  defaultChoice: string;
  option?: any;
}) {
  const [selectedValue, setSelectedValue] = useState("default");

  return (
    <div className="flex flex-col  justify-center px-6 py-4 gap-y-4">
      <p className="font-semibold text-xs uppercase ">{label}</p>

      <select
        className={joiner(
          "select select-bordered w-full  h-[38px] min-h-0  text-sm ",
          { transparentFont: selectedValue === "default" }
        )}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option
          className=" text-sm  "
          disabled
          value="default"
        >
          {defaultChoice}
        </option>
        {option.map((item: any) => {
          return (
            <option
              key={item}
              value={item}
              className=" text-sm"
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
