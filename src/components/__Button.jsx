import { useState } from "react";

const Button = () => {
  const [text, setText] = useState(0);

  const dilGuncelle = () => {
    // setText("Yeni Değer");
    setText((prev) => {
      if (prev === 2) {
        return text + 10;
      } else {
        return text + 1;
      }
    });
  };

  return (
    <div>
      <div>{text}</div>
      <button onClick={dilGuncelle}>İsim Değiştir</button>
    </div>
  );
};

export default Button;
