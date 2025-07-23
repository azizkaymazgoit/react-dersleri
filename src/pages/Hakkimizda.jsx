import React from "react";
import { Link, Outlet } from "react-router";

const Hakkimizda = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/hakkimizda/firma"}>Firma</Link>
        <Link to={"/hakkimizda/basinda-biz"}>Basında Biz</Link>
      </div>
      <div>Hakkimizda sayfası</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Hakkimizda;
