import Kisi from "./Kisi";
import insanlar from "../../kisiler.json";

function Kisiler() {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "10px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {insanlar.map((insan) => {
        return (
          <Kisi
            key={insan.id}
            isim={insan.ad}
            soyad={insan.soyad}
            meslek={insan.meslek}
            durum={insan.durum}
          />
        );
      })}
    </div>
  );
}

export default Kisiler;
