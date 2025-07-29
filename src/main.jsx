import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { DilProvider } from "./hooks/DilContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Todo from "./pages/Todo.jsx";

/* import Hakkimizda from "./pages/Hakkimizda.jsx";
import Iletisim from "./pages/Iletisim.jsx";
import Header from "./components/Header.jsx";
import User from "./pages/User.jsx";
import Kategori from "./pages/Kategori.jsx";
import Firma from "./pages/Firma.jsx";
import BasindaBiz from "./pages/BasindaBiz.jsx";
import Urunler from "./pages/Urunler.jsx";
import UrunDetay from "./pages/UrunDetay.jsx"; */

const Hakkimizda = lazy(() => import("./pages/Hakkimizda.jsx"));
const Iletisim = lazy(() => import("./pages/Iletisim.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const User = lazy(() => import("./pages/User.jsx"));
const Kategori = lazy(() => import("./pages/Kategori.jsx"));
const Firma = lazy(() => import("./pages/Firma.jsx"));
const BasindaBiz = lazy(() => import("./pages/BasindaBiz.jsx"));
const Urunler = lazy(() => import("./pages/Urunler.jsx"));
const UrunDetay = lazy(() => import("./pages/UrunDetay.jsx"));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/hakkimizda" element={<Hakkimizda />}>
            <Route path="firma" element={<Firma />} />
            <Route path="basinda-biz" element={<BasindaBiz />} />
          </Route>

          <Route path="/iletisim" element={<Iletisim />}>
            <Route path="firma" element={<Firma />} />
          </Route>

          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urun/:id" element={<UrunDetay />} />

          <Route path="/todo" element={<Todo />} />

          <Route path="/user/:userId" element={<User />} />
          <Route path="/kategori/:kategoriAdi" element={<Kategori />} />
          <Route path="*" element={"404 sayfası"} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);

// store, action, reducer

// store: bir mağaza, bir app, bir restoran, havuz
// slice: restoranı kategorize edebilmek için her bir bölüm
// action: sipariş alınabilir, patates doğranabilri, servis açıalbilri,
// reducer: siparişi yapmak aşaması

// restoran: store
// mutfak: slice
// mutfağın patates sayısı azalabilri: action
// mutfakta yemek yapılabilir: action
// mutfakta yemek yapan aşçı, onu kontrol edip yemeği hazır hale getirmesi: reducer
// bahçe
// bahçenin yapabilecekleri
