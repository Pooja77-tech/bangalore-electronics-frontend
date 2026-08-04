import { Outlet } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="spatial-app min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="spatial-main animate-fadeIn pt-24">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
