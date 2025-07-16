import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { getMakale } from "../makale-api";

const Makaleler = () => {
  /* const istek = axios.get(API_URL).then((res) => {
    console.log(res);
  }); */

  const [makaleler, setMakaleler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState(false);

  const formBaslangic = {
    search: "",
  };

  useEffect(() => {
    dataCek("react");
  }, []);

  const handleSubmit = (v, a) => {
    dataCek(v.search);
    a.resetForm();
  };

  const dataCek = async (q) => {
    try {
      setYukleniyor(true);
      const sonuc = await getMakale(q);
      setMakaleler(sonuc);
      setYukleniyor(false);
    } catch (error) {
      setHata(true);
      console.log(error);
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <Formik initialValues={formBaslangic} onSubmit={handleSubmit}>
        <Form>
          <Field name="search" />
          <button type="submit">Ara</button>
        </Form>
      </Formik>

      <h1>Makale Sayfası</h1>
      <p>Burada makaleler listelenecek</p>
      {yukleniyor ? (
        <h3>Yükleniyor...</h3>
      ) : hata ? (
        <h3>Bir Sorun Oluştu..</h3>
      ) : makaleler.length > 0 ? (
        <ul>
          {makaleler.map((makale) => {
            return (
              <li key={makale.objectID}>
                <a href={makale.url} target="_blank">
                  {makale.title}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Sonuç bulunamadı..</h3>
      )}
    </div>
  );
};

export default Makaleler;
