import Image from "next/image";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ml-[72px] mt-[72px]">
      <Sidebar />
      <Header />
      <div className="h-[calc(100svh-72px)] w-full ">
        {children}
      </div>
    </div>
  );
}
