"use client";
import { useState } from "react";
import MainIcon from "../assets/svg/MainIcon";
import InvoiceIcon from "../assets/svg/InvoiceIcon";
import DocumentsIcon from "../assets/svg/DocumentsIcon";
import TravelHistoryIcon from "../assets/svg/TravelHistoryIcon";
import AssetsIcon from "../assets/svg/AssetsIcon";
import MainContent from "./MainContent";

export default function PersonDetails() {
  const [selectedMenu, setSelectedMenu] = useState("main");

  const menus = [
    {
      name: "Main",
      value: "main",
      icon: (
        <MainIcon
          className={"h-6"}
          fill={selectedMenu === "main" ? "#3B9B7A" : "#292D32"}
        />
      ),
      content: <MainContent />,
    },
    {
      name: "Income",
      value: "income",
      icon: (
        <InvoiceIcon
          className={"h-6"}
          fill={selectedMenu === "income" ? "#3B9B7A" : "#292D32"}
        />
      ),
      content: <MainContent />,
    },
    {
      name: "Documents",
      value: "documents",
      icon: (
        <DocumentsIcon
          className={"h-6"}
          fill={selectedMenu === "documents" ? "#3B9B7A" : "#292D32"}
        />
      ),
      content: <MainContent />,
    },
    {
      name: "Travel History",
      value: "travel_history",
      icon: (
        <TravelHistoryIcon
          className={"h-6"}
          fill={selectedMenu === "travel_history" ? "#3B9B7A" : "#292D32"}
        />
      ),
      content: <MainContent />,
    },
    {
      name: "Assets",
      value: "assets",
      icon: (
        <AssetsIcon
          className={"h-6"}
          fill={selectedMenu === "assets" ? "#3B9B7A" : "#292D32"}
        />
      ),
      content: <MainContent />,
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex">
        {menus.map((menu) => {
          return (
            <button
              onClick={() => {
                setSelectedMenu(menu.value);
              }}
              className={`flex items-center px-6 py-3 space-x-1 relative`}
            >
              {menu.icon}
              <div
                className={`${
                  menu.value === selectedMenu ? "text-[#3B9B7A]" : "text-black"
                } ibm-plex-mono-bold text-sm `}
              >
                {menu.name}
              </div>

              <div
                className={`absolute bottom-0 left-0 w-full h-1 ${
                  menu.value === selectedMenu &&
                  "bg-[#3B9B7A] rounded-tl-md rounded-tr-md"
                }`}
              />
            </button>
          );
        })}
      </div>
      {menus.find((x) => x.value === selectedMenu).content}
    </div>
  );
}
