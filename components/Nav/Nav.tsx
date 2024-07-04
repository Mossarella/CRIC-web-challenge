"use client";

import React, { useState } from "react";
import style from "./Nav.module.css";
import joiner from "classnames";
import Link from "next/link";

export default function Nav() {
  const schoolName = [
    {
      name: "PDPA / International School",
    },
    {
      name: "Crics Elementary School",
    },
    {
      name: "Godolkin University",
    },
  ];
  const [projectName, setProjectName] = useState<string>(schoolName[0].name);

  return (
    <div className="navbar h-[64px] bg-[var(--white)] px-6 justify-between">
      <div className="navbar-start w-auto">
        <img
          className=" h-[36px] w-[36px] me-4"
          src="/images/MainLogo.svg"
          alt=""
        />

        <div
          className="dropdown flex flex-row cursor-pointer   items-center h-full"
          tabIndex={0}
        >
          <p className="me-4 font-semibold text-base ">{projectName}</p>
          <div className={joiner(" h-8  flex justify-center items-center  ")}>
            <img
              src="/images/Arrow.svg"
              alt=""
            />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[var(--white)] mt-[180px] rounded-lg z-[53] w-64 p-2 shadow"
          >
            {schoolName.map((item) => {
              return (
                <li key={item.name}>
                  <p
                    className=""
                    onClick={(e) => {
                      setProjectName((e.target as HTMLAnchorElement).innerText);
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-end w-auto">
        <button className=" h-[36px] w-[36px] ">
          <img
            className="rounded-full w-full h-full"
            alt="profile"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </button>
      </div>
    </div>
  );
}
