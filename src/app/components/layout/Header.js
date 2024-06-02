"use client";

import DashboardOutlinedIcon from "@/app/assets/svg/DashboardOutlinedIcon";
import NotificationIcon from "@/app/assets/svg/NotificationIcon";
import SearchIcon from "@/app/assets/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <div className="flex items-center justify-between fixed top-0 left-0 border-b border-b-[rgb(0,0,0,.1)] ml-[72px] box-border px-4 w-[calc(100%-72px)] h-[72px]">
      <div className="flex items-center h-full space-x-1">
        <DashboardOutlinedIcon />
        <div className="font-semibold">Applications</div>
      </div>
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
            placeholder="Search Here"
          />
        </div>
      </form>

      <div className="flex space-x-1">
        <button className="border-2 border-[rgb(0,0,0,.1)] w-10 h-10 flex justify-center items-center p-1 rounded-lg">
          <NotificationIcon />
        </button>
        <button className="border-2 border-[rgb(0,0,0,.1)] w-10 h-10 flex justify-center items-center p-1 rounded-lg relative overflow-hidden">
          <Image
            src={"/search-normal.png"}
            fill
            style={{ objectFit: "cover" }}
          />
        </button>
      </div>
    </div>
  );
}
