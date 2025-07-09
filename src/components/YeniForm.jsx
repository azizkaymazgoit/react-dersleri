import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import css from "./YeniForm.module.css";

const YeniForm = () => {
  const emailValidate = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const formScheme = yup.object().shape({
    adsoyad: yup
      .string()
      .required("zorunlu alan")
      .min(5, "minimum 5 karakter olmalı")
      .max(10, "max 10 karakter olmalı"),
    email: yup
      .string()
      .required("zorunlu alan")
      .email("geçersiz email")
      .matches(emailValidate, "geçersiz email adresi"),
  });

  const formBaslangicDegerleri = {
    adsoyad: "",
    email: "",
    yetki: "admin",
    not: "",
    aktifmi: false,
    hobiler: [],
  };

  const handleSub = (values, actions) => {
    console.log("values: ", values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={handleSub}
        initialValues={formBaslangicDegerleri}
        validationSchema={formScheme}
      >
        <Form className={css.formflex}>
          <label htmlFor="adsoyad" className={css.formitem}>
            <span>Ad Soyad</span>
            <Field type="text" name="adsoyad" id="adsoyad" />
            <ErrorMessage
              className={css.error}
              name="adsoyad"
              component="span"
            />
          </label>
          <label htmlFor="email" className={css.formitem}>
            <span>Email</span>
            <Field type="email" name="email" id="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label htmlFor="yetki" className={css.formitem}>
            <span>Yetki</span>
            <Field as="select" name="yetki" id="yetki">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
          </label>
          <label htmlFor="not" className={css.formitem}>
            <span>Not</span>
            <Field as="textarea" name="not" id="not"></Field>
          </label>
          <label htmlFor="aktifmi">
            <span>Aktif / Pasif</span>
            <Field type="checkbox" name="aktifmi" id="aktifmi" />
          </label>

          <label htmlFor="hobiler">
            <span>Kitap</span>
            <Field type="checkbox" name="hobiler" value="kitap" />
          </label>

          <label htmlFor="hobiler">
            <span>TV</span>
            <Field type="checkbox" name="hobiler" value="tv" />
          </label>

          <button type="submit" className={css.formitem}>
            Kişi Oluştur
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default YeniForm;
