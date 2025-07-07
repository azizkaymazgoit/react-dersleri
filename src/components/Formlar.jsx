import { useState } from "react";

const Formlar = () => {
  /* const handleSubmit = (e) => {
    e.preventDefault();

    const kullaniciAdi = e.target.elements.kullaniciadi.value;

    // kontrolleri yap daha sonra post
    // sunucuya istek login ettim

    console.log(kullaniciAdi);

    e.target.reset();
  }; */

  const [kullaniciAdi, setKullaniciAdi] = useState("");

  const handleChange = (e) => {
    setKullaniciAdi(e.target.value);
    console.log(kullaniciAdi);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("tıklandı");
    console.log("tıklandu: ", kullaniciAdi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit edildi");
    console.log("submit: ", kullaniciAdi);
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          value={kullaniciAdi}
          type="text"
          name="kullaniciadi"
          onChange={handleChange}
        />

        <div>{kullaniciAdi}</div>

        <button onClick={handleClick} type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Formlar;
