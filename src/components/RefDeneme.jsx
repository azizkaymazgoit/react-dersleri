import { useRef } from "react";
import { useDil } from "../hooks/DilContext";

const RefDeneme = () => {
  // useRef

  /* const [sayi, setSayi] = useState(0);
  const ref = useRef(0);

  const handelStateSayi = () => {
    console.log("state ", sayi);
    setSayi(sayi + 1);
  };

  const handleRefSayi = () => {
    ref.current += 1;
    console.log("ref ", ref.current);
  };

  const divRef = useRef(null);
  console.log(divRef);

  useEffect(() => {
    console.log(divRef);
  }, []); */

  const sesRef = useRef(null);

  const handleBaslat = () => {
    sesRef.current.play();
  };

  const handleDurdur = () => {
    sesRef.current.pause();
  };

  const { dil } = useDil();

  return (
    <>
      <audio
        ref={sesRef}
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        controls
      ></audio>
      <h1>ref deneme: {dil}</h1>
      <button onClick={handleBaslat}>Başlat</button>
      <button onClick={handleDurdur}>Durdur</button>
      {/* <div ref={divRef}>
      <button onClick={handelStateSayi}>State Sayı Arttır {sayi}</button>
      <button onClick={handleRefSayi}>useRef Sayı Arttır {ref.current}</button>
    </div> */}
    </>
  );
};

export default RefDeneme;
