import { useDil } from "../hooks/DilContext";

function Kisi({ isim, soyad, meslek, durum }) {
  const { dil } = useDil();

  return (
    <div
      style={{
        width: "200px",
        border: durum === "online" ? "1px solid green" : "1px solid red",
        margin: "10px",
      }}
    >
      <h3>
        {dil}
        {isim} {soyad}
      </h3>
      <h4>{meslek}</h4>
      <p>{durum === "online" ? "Online" : "Offline"}</p>
    </div>
  );
}

export default Kisi;
