import React, { useState } from "react";

const Radio = () => {
  const [cevap, setCevap] = useState("hayir");

  return (
    <div>
      <label>
        <span>Evet: </span>
        <input
          type="radio"
          value="evet"
          checked={cevap === "evet"}
          onChange={() => {
            setCevap("evet");
          }}
        />
      </label>
      <label>
        <span>Hayır: </span>
        <input
          type="radio"
          value="hayir"
          checked={cevap === "hayir"}
          onChange={() => {
            setCevap("hayir");
          }}
        />
      </label>
    </div>
  );
};

export default Radio;
