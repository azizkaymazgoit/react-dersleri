import React from "react";
import { useParams } from "react-router";

const Kategori = () => {
  const { kategoriAdi } = useParams();

  return <div>Burası {kategoriAdi} Kategorisi</div>;
};

export default Kategori;
