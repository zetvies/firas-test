import { Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firas",
  description: "Front End Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
