import { useMemo, useState } from "react";

const gezegenler = ["Dünya", "Mars", "Jupiter", "Venüs"];

const Deneme = () => {
  // useMemo

  const [sayi, setSayi] = useState(0);
  const [aranan, setAranan] = useState("");

  const memoFiltreGezegen = useMemo(() => {
    const gezegenFiltrele = gezegenler.filter((gezegen) => {
      return gezegen.includes(aranan);
    });

    for (let i = 0; i < 10000; i++) {
      console.log(i);
    }
    return gezegenFiltrele;
  }, [aranan]);

  console.log(gezegenler);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setSayi(sayi + 1);
          }}
        >
          Sayı Arttır {sayi}
        </button>
      </div>
      <div>
        <input
          value={aranan}
          type="text"
          onChange={(e) => {
            setAranan(e.target.value);
            console.log(aranan);
          }}
        />
        <ul>
          {memoFiltreGezegen.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Deneme;
