"use client";

import BookmarkIcon from "@/assets/svg/BookmarkIcon";
import ChartIcon from "@/assets/svg/ChartIcon";
import DashboardIcon from "@/assets/svg/DashboardIcon";
import NotesIcon from "@/assets/svg/NotesIcon";
import StatisticIcon from "@/assets/svg/StatisticIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  let pathname = usePathname();
  const menus = [
    {
      name: "Dashboard",
      pathname: "/",
      icon: (
        <DashboardIcon
          className={"h-6"}
          fill={pathname == "/" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
    {
      name: "Statistic A",
      pathname: "/statistic-a",

      icon: (
        <StatisticIcon
          className={"h-6"}
          fill={pathname == "/statistic-a" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
    {
      name: "Statistic B",
      pathname: "/statistic-b",

      icon: (
        <StatisticIcon
          className={"h-6"}
          fill={pathname == "/statistic-b" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
    {
      name: "Bookmark",
      pathname: "/bookmark",

      icon: (
        <BookmarkIcon
          className={"h-6"}
          fill={pathname == "/bookmark" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
    {
      name: "Notes",
      pathname: "/notes",

      icon: (
        <NotesIcon
          className={"h-6"}
          fill={pathname == "/notes" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
    {
      name: "Chart",
      pathname: "/chart",

      icon: (
        <ChartIcon
          className={"h-6"}
          fill={pathname == "/chart" ? "#3B9B7A" : "#B0B0B0"}
        />
      ),
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center fixed top-0 left-0 border-r border-r-[rgb(0,0,0,.1)]">
      <div className="bg-[#3674D0] w-10 h-10 rounded-full m-4"></div>
      {menus.map((menu) => {
        return (
          <Link href={menu.pathname} className="w-full">
            <button className="h-16 w-full relative">
              <div
                className={`w-full h-full flex items-center justify-center ${
                  pathname === menu.pathname && "fill-[#3B9B7A]"
                }`}
              >
                {menu.icon}
              </div>
              <div
                className={`absolute top-0 right-0 w-1 h-full ${
                  pathname === menu.pathname &&
                  "bg-[#3B9B7A] rounded-tl-md rounded-bl-md"
                }`}
              />
            </button>
          </Link>
        );
      })}
    </div>
  );
}
