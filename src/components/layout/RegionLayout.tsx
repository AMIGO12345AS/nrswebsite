import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Region } from "@/lib/region";

interface RegionLayoutProps {
  region: Region;
}

export default function RegionLayout({ region }: RegionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar region={region} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer region={region} />
    </div>
  );
}
