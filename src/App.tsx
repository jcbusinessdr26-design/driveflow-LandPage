import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostPurchase from "./pages/PostPurchase";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pos-compra" element={<PostPurchase />} />
      </Routes>
    </BrowserRouter>
  );
}
