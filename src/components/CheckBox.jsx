import { useState } from "react";

const CheckBox = () => {
  const [onay, setOnay] = useState(false);

  const handleCheck = () => {
    setOnay(!onay);
  };

  return (
    <div>
      <label htmlFor="secenek1">
        <span>Sözleşmeyi Okudum Kabul Ediyorum</span>
        <input
          type="checkbox"
          checked={onay}
          id="secenek1"
          onChange={handleCheck}
        />
      </label>
      <br />
      <button disabled={!onay}>Gönder</button>
    </div>
  );
};

export default CheckBox;
