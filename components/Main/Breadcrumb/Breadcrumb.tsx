import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="breadcrumbs  text-sm p-0 flex  items-center">
      <ul>
        <li className="h-full">
          <Link href="/">
            <img
              className="min-w-[24px] min-h-[24px] "
              src="/images/Home.svg"
              alt=""
            />
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="/"
            className="h-full opacity-[0.3]"
          >
            path
          </Link>
        </li>
      </ul>
    </div>
  );
}
