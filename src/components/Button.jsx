import { useEffect, useState } from "react";

const Button = () => {
  /* console.log("render edildi");

  const [sayi, setSayi] = useState(0);

  useEffect(() => {
    console.log("mount edildi");

    const sure = 1000;
    let i = 1;
    const sayac = setInterval(() => {
      console.log(`çalıştı: ${sure * i}`);
      i++;
    }, sure);

    return () => clearInterval(sayac);
  }, []);

  const handleClick = () => {
    console.log("buttona tıklandı");
    setSayi(sayi + 1);
  }; */

  /* // useeffect 2
  const [sayi, setSayi] = useState(0);

  useEffect(() => {
    document.title = `Merhaba ${sayi}`;
  }, [sayi]);

  const handleClick = () => {
    setSayi(sayi + 1);
  }; */

  const [sayi, setSayi] = useState(() => {
    const data = window.localStorage.getItem("clickSayi");
    return data ? JSON.parse(data) : 0;
  });

  /* useEffect(() => {
    console.log(sayi);
    const data = window.localStorage.getItem("clickSayi");
    setSayi(JSON.parse(data));
  }, []);

  useEffect(() => {
    console.log(sayi);
    if (sayi !== 0) {
      window.localStorage.setItem("clickSayi", JSON.stringify(sayi));
    }
  }, [sayi]); */

  useEffect(() => {
    //window.localStorage.setItem("clickSayi", JSON.stringify(sayi));
    // setSayi(sayi + 1);
  }, [sayi]);

  const handleClick = () => {
    setSayi(sayi + 1);
  };

  return (
    <>
      <div>{sayi}</div>
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default Button;
