import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">

      {/* Fixed Neon Glass Navbar */}
      <Navbar />

      {/* Page Content Wrapper */}
      <main
        className="
          pt-24 
          animate-fadeIn 
          px-4 md:px-6
        "
      >
        <Outlet />
      </main>
    </div>
  );
}
