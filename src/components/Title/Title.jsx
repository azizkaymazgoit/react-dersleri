import clsx from "clsx";

import "./Title.css";
import { GiAbstract085 } from "react-icons/gi";
import { FaBluetooth } from "react-icons/fa";

const Title = ({ underline, active }) => {
  return (
    <h1
      className={clsx("title", underline, {
        aziz: active,
      })}
    >
      Başlık
      <GiAbstract085 color="red" size={90} />
      <FaBluetooth />
    </h1>
  );
};

export default Title;
