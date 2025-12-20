import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}