function Kisi({ isim, soyad, meslek, durum }) {
  return (
    <div>
      <h3>
        {isim} {soyad}
      </h3>
      <h4>{meslek}</h4>
      <p>{durum === "online" ? "Online" : "Offline"}</p>
    </div>
  );
}

export default Kisi;
