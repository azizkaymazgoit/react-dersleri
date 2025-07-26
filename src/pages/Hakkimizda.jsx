import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";

const Hakkimizda = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/hakkimizda/firma"}>Firma</Link>
        <Link to={"/hakkimizda/basinda-biz"}>Basında Biz</Link>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint,
          nobis libero illum voluptate iure perspiciatis eos porro quis
          doloribus! Voluptate quo perferendis porro fugit nostrum officiis,
          minima ad dolor!
        </p>
        <Link to={"/urun/2"} state={location}>
          Ürüne Git
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          necessitatibus dignissimos assumenda pariatur similique accusantium
          repellendus voluptates iure, delectus eveniet, totam sunt corrupti
          iste repudiandae praesentium a alias, deleniti excepturi!
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/?utm=hakkimizda");
        }}
      >
        Story İzle
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Hakkimizda;
