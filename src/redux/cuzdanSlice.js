import { createAction, createReducer } from "@reduxjs/toolkit";

const initialCuzdan = {
  id: 1,
  bakiye: 100,
};

const bakiyeEkle = createAction("cuzdan/ekle");
const bakiyeCikar = createAction("cuzdan/cikar");

export { bakiyeEkle, bakiyeCikar };

const cuzdanReducer = (state = initialCuzdan, action) => {
  switch (action.type) {
    case "cuzdan/ekle":
      console.log("bakiye arttırıldı");
      return { ...state, bakiye: state.bakiye + action.payload };
    case "cuzdan/cikar":
      console.log("bakiye eksildi");
      return { ...state, bakiye: state.bakiye - action.payload };
  }
  return state;
};

const cuzdanReducer2 = createReducer(initialCuzdan, (builder) => {
  builder
    .addCase(bakiyeEkle, (state, action) => {
      console.log("bakiye arttırıldı createReducer");
      return { ...state, bakiye: state.bakiye + action.payload };
    })
    .addCase(bakiyeCikar, (state, action) => {
      console.log("bakiye çıakrıldı createReducer");
      return { ...state, bakiye: state.bakiye - action.payload };
    });
});

export default cuzdanReducer2;
