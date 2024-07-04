"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Breadcrumb() {
  const navSideContent = {
    datamap: "Data Mapping",
    governance: "Governance Document",
    employee: "Employee Awareness",
    dataprocess: "Data Processors",
    subjectaccess: "Subject Access Request",
    databreach: "Data Breach Register",
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment: any, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    let label =
      segment.startsWith("[") && segment.endsWith("]")
        ? searchParams.get(segment.slice(1, -1)) || segment.slice(1, -1)
        : segment.replace(/-/g, " ");

    if (navSideContent.hasOwnProperty(segment)) {
      label = navSideContent[segment];
    }

    return (
      <li
        key={href}
        className="h-full"
      >
        {isLast ? (
          <span className="opacity-50">{label}</span>
        ) : (
          <Link
            href={href}
            className=" opacity-50"
          >
            {label}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="breadcrumbs text-sm p-0 flex items-center">
      <ul className="flex space-x-2">
        <li className="h-full">
          <Link href="/">
            <img
              className="min-w-[24px] min-h-[24px]"
              src="/images/Home.svg"
              alt="Home"
            />
          </Link>
        </li>
        {breadcrumbs}
      </ul>
    </div>
  );
}
