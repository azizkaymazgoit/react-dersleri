import Kisiler from "./components/Kisiler";
import Paragraf from "./components/Paragraf/Paragraf";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Title underline={"baslik"} active={true} />
      <Paragraf renk={"mavi"} />
      <Kisiler />
    </>
  );
}

export default App;
