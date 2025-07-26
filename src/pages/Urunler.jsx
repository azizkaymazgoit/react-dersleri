import { Link, useLocation, useNavigate } from "react-router";
import urunList from "../../urunlist.json";
import css from "./Urunler.module.css";

const Urunler = () => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className={css.urunlerContainer}>
      <h2>Ürün Listesi</h2>
      <div className={css.urunlerListesi}>
        {urunList.map((urun) => (
          <div
            className={css.urunKarti}
            key={urun.id}
            onClick={() => {
              navigate(`/urun/${urun.id}`, {
                state: location,
              });
            }}
          >
            <img className={css.urunResmi} src={urun.resim} alt={urun.isim} />
            <h3>{urun.isim}</h3>
            <p>{urun.aciklama}</p>
            <span className={css.fiyat}>{urun.fiyat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Urunler;
