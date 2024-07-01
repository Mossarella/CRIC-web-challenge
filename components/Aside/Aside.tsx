"use client";

import { INavSideContent } from "@/interfaces/INavSideContent";
import React, { useEffect, useState } from "react";
import joiner from "classnames";
import Link from "next/link";

export default function Aside({}) {
  const [open, setOpen] = useState(false);

  const navSideContent: INavSideContent[] = [
    {
      id: 1,
      text: "Data Mapping",
      icon: "/images/DataMapping.svg",
      href: "/",
    },
    {
      id: 2,
      text: "Governance Document",
      icon: "/images/Governance.svg",
      href: "/",
    },
    {
      id: 3,
      text: "Employee Awareness",
      icon: "/images/Employee.svg",
      href: "/",
    },
    {
      id: 4,
      text: "Data Processors",
      icon: "/images/Data.svg",
      href: "/",
    },
    {
      id: 5,
      text: "Subject Access Request",
      icon: "/images/Subject.svg",
      href: "/",
    },
    {
      id: 6,
      text: "Data breach register",
      icon: "/images/DataBreach.svg",
      href: "/",
    },
  ];

  const [activeNavSide, setActiveNavSide] = useState<number>(0);

  useEffect(() => {
    updateMedia();

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const updateMedia = () => {
    if (window.innerWidth < 1023.98) {
      setOpen(false);
    }
  };

  return (
    <div
      className={joiner(
        "bg-[var(--grey)] pt-0 sm:pt-0 md:pt-0 lg:pt-6 h-[64px] sm:h-[64px] md:h-[64px] lg:h-full items-center sm:items-center md:items-center lg:items-stretch overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden customScrollBar gap-x-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-0  px-6 relative  smooth z-[1] flex flex-row sm:flex-row md:flex-row lg:flex-col",
        {
          "w-full sm:w-full md:w-full lg:w-[260px]": !open,
          "w-full sm:w-full md:w-full lg:w-[72px]": open,
        }
      )}
    >
      {navSideContent.map((item) => {
        return (
          <Link
            href={item.href}
            onClick={() => {
              setActiveNavSide(item.id);
            }}
            className={joiner(
              "flex flex-row h-[40px]  items-center  hover:greenFilter",
              activeNavSide === item.id ? "greenFilter" : ""
            )}
            key={item.id}
          >
            <img
              className="min-w-[24px] min-h-[24px]"
              src={item.icon}
              alt={item.text}
            />
            <p
              className={joiner(
                " text-sm font-medium tracking-wide ms-4 whitespace-nowrap smooth",

                open ? "opacity-0" : "opacity-100"
              )}
            >
              {item.text}
            </p>
          </Link>
        );
      })}
      <div
        onClick={() => setOpen((open) => !open)}
        className={joiner(
          " hidden sm:hidden md:hidden lg:flex  bg-[#FFFFFF] z-[30] w-8 h-8 cursor-pointer  justify-center items-center  rounded-full absolute translate-x-[50%] translate-y-[-50%] right-0 top-[42px]  shadow-sm"
        )}
      >
        <img
          className={joiner("transition-all ", {
            "rotate-[270deg]": open,
            "rotate-[90deg]": !open,
          })}
          src="/images/Arrow.svg"
          alt=""
        />
      </div>
    </div>
  );
}
