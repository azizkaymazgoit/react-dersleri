import { useNavigate, useSearchParams } from "react-router";
import Makaleler from "./components/Makaleler";

function App() {
  /* 
  const git = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const utm = searchParams.get("utm");

  console.log("utm", utm);
  console.log("reklam 1 kere tıklandı"); */

  return (
    <>
      <div>
        <Makaleler />
      </div>
    </>
  );
}

export default App;
