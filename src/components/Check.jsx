import { useState } from "react";

const Check = () => {
  const meyveler = ["elma", "armut", "portakal"];

  const [secili, setSecili] = useState([]);

  const handleCheck = (e) => {
    const tiklanan = e.target.value;
    setSecili(
      secili.includes(tiklanan)
        ? secili.filter((item) => item !== tiklanan)
        : [...secili, tiklanan]
    );
  };

  return (
    <div>
      {meyveler.map((meyve) => {
        return (
          <label htmlFor={meyve} key={meyve}>
            <span>{meyve}</span>
            <input
              id={meyve}
              type="checkbox"
              value={meyve}
              onChange={handleCheck}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Check;
