import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [goster, setGoster] = useState(true);

  const handleGizle = () => {
    setGoster(!goster);
  };

  return (
    <>
      {/* <button onClick={handleGizle} style={{ marginBottom: "10px" }}>
        Gizle / Goster
      </button> */}
      {goster && <Button />}
    </>
  );
}

export default App;
