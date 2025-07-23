import React from "react";
import { Outlet } from "react-router";

const Iletisim = () => {
  return (
    <div>
      Iletisim sayfası <Outlet />
    </div>
  );
};

export default Iletisim;
