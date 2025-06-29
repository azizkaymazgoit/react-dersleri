import css from "./Paragraf.module.css";

const Paragraf = ({ renk }) => {
  return (
    <p className={css.parag + " " + css[renk]}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsam
      doloribus vero esse magnam ratione ducimus consectetur corrupti? Nemo
      nulla obcaecati iste minima exercitationem incidunt quis accusamus
      adipisci est provident.
    </p>
  );
};

export default Paragraf;
