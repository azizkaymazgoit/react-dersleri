import { useId, useState } from "react";
import Select from "./Select";

const SelectBox = () => {
  // const [dil, setDil] = useState("en");

  const inputID = useId();

  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor={inputID}>
        asdasdasdasdasd
        <input type="checkbox" id={inputID} />
      </label>

      {/* <Select dil={dil} setDil={setDil} /> */}
      {/* <div>
        <p>Sitenin dili: {dil}</p>
      </div> */}
    </div>
  );
};

export default SelectBox;
