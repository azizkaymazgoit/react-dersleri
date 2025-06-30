// useState
// hook
// use

import { useState } from "react";
import { BiHandicap } from "react-icons/bi";

const Button = () => {
  /* const [sayi, setSayi] = useState(0);

  const handleClick = () => {
    setSayi(sayi + 1);
  }; */

  /* const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }; */

  const [acikMi, setAcikMi] = useState(true);/* 

  const handleClick = () => {
    setAcikMi(!acikMi);
  }; */

  return (
    <>
      <button
        onClick={() => {
          setAcikMi(!acikMi);
        }}
      >
        {acikMi ? "Kapat" : "Aç"}
      </button>
      {acikMi && <p>Burası mesaj alanı</p>}
      {/* <div>{text}</div> */}
      {/* <input type="text" onChange={handleChange} /> */}
      {/* <button onClick={handleClick}>Tıkla</button> */}
    </>
  );
};

export default Button;
