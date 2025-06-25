import Kisi from "./Kisi";
import insanlar from "../../kisiler.json";

function Kisiler() {
  const arr = ["Aziz", "Aziz", "Aziz", "Aziz", "Aziz"];

  return (
    <>
      {arr.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      {/* {insanlar.map((insan) => {
        return (
          <Kisi
            key={insan.id}
            isim={insan.ad}
            soyad={insan.soyad}
            meslek={insan.meslek}
            durum={insan.durum}
          />
        ); */}
    </>
  );
}

export default Kisiler;
