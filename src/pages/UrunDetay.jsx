import { useLocation, useNavigate, useParams } from "react-router";
import urunList from "../../urunlist.json";
import css from "./UrunDetay.module.css";

const UrunDetay = () => {
  const { id } = useParams();
  const geriNavigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const urun = urunList.find((item) => item.id === Number(id));

  if (!urun) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div className={css.urunDetayContainer}>
      <h2>{urun.isim}</h2>
      <img className={css.urunResmi} src={urun.resim} alt={urun.isim} />
      <p>{urun.aciklama}</p>
      <span className={css.fiyat}>{urun.fiyat}</span>
      <button
        className={css.geriGitButton}
        onClick={() => {
          geriNavigate(location.state ? location.state : "/urunler");
        }}
      >
        Geri Git
      </button>
    </div>
  );
};

export default UrunDetay;
