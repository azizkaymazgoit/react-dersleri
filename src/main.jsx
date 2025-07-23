import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { DilProvider } from "./hooks/DilContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Hakkimizda from "./pages/Hakkimizda.jsx";
import Iletisim from "./pages/Iletisim.jsx";
import Header from "./components/Header.jsx";
import User from "./pages/User.jsx";
import Kategori from "./pages/Kategori.jsx";
import Firma from "./pages/Firma.jsx";
import BasindaBiz from "./pages/BasindaBiz.jsx";

createRoot(document.getElementById("root")).render(
  <DilProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/hakkimizda" element={<Hakkimizda />}>
          <Route path="firma" element={<Firma />} />
          <Route path="basinda-biz" element={<BasindaBiz />} />
        </Route>

        <Route path="/iletisim" element={<Iletisim />}>
          <Route path="firma" element={<Firma />} />
        </Route>
        <Route path="/user/:userId" element={<User />} />
        <Route path="/kategori/:kategoriAdi" element={<Kategori />} />
        <Route path="*" element={"404 sayfası"} />
      </Routes>
    </BrowserRouter>
  </DilProvider>
);
