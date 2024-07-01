"use client";

import { useDrawer } from "@/contexts/CDrawer";
import React from "react";
import DrawerCheckbox from "../DrawerCheckbox";

export default function DrawerImport() {
  const { isOpen, drawerData, openDrawer, closeDrawer } = useDrawer();

  return <div></div>;
}
