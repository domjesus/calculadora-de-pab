import React from "react";
import estilo from "./../styles/estilo.module.css";
import es from "./../styles/es.module.css";

function Button(props) {
  const { classe } = props;
  // console.log("PROPS: ", classe, " estilo: ", estilo);

  return (
    <div>
      <button type="button" onClick={props.event} className={estilo[classe]}>
        {props.name}
      </button>
      <p className={estilo.outrop}>Elemento do P</p>
      <p className={es.bigblue}>OTHER MALUCO P</p>
    </div>
  );
}

export default Button;
