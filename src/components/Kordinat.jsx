import { useState } from "react";

const Kordinat = () => {
  const [kordinat, setKordinat] = useState({ x: 0, y: 0, z: 0 });

  /* const xArttir = () => {
    setKordinat({
      ...kordinat,
      x: kordinat.x + 1,
    });
  };

  const yArttir = () => {
    setKordinat({
      ...kordinat,
      y: kordinat.y + 1,
    });
  };

  const zArttir = () => {
    setKordinat({
      ...kordinat,
      z: kordinat.z + 1,
    });
  }; */

  const handleClick = (yon, islem) => {
    setKordinat({
      ...kordinat,
      [yon]: islem === "+" ? kordinat[yon] + 1 : kordinat[yon] - 1,
    });
  };

  return (
    <>
      <div>
        <div>X: {kordinat.x}</div>
        <div>Y: {kordinat.y}</div>
        <div>Z: {kordinat.z}</div>
      </div>
      <div>
        <button
          onClick={() => {
            handleClick("x", "+");
          }}
        >
          X arttır
        </button>
        <button
          onClick={() => {
            handleClick("y", "+");
          }}
        >
          Y arttır
        </button>
        <button
          onClick={() => {
            handleClick("z", "-");
          }}
        >
          Z arttır
        </button>
      </div>
    </>
  );
};

export default Kordinat;
