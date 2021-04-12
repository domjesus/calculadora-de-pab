import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Data from "./components/Data";
import Dias from "./components/Dias";
import InputText from "./components/InputText";
import moment from "moment";
import "./index.css";
import ListItens from "./components/ListItens";
import ToastFactory from "./components/ToastFactory";

const App = () => {
  const [dataIni, setDataIni] = useState(moment().startOf("month").format("Y-MM-DD"));
  const [dataFim, setDataFim] = useState(moment().format("Y-MM-DD"));
  const [dias, setDias] = useState();
  const [mr, setMr] = useState("");
  const [valorDias, setValorDias] = useState();
  const [meses, setMeses] = useState(moment(dataFim).diff(dataIni, "months") + 1);
  const [valorMeses, setValorMeses] = useState();
  const [descontos, setDescontos] = useState("");
  const [correcao, setCorrecao] = useState("");
  const [toast, setToast] = useState({
    show: false,
    variant: "success",
    header: "",
    message: "",
  });

  // const calcData = (e) => {
  //   if (e.target.id == "dt_inicial") setDataIni(e.target.value);
  //   else setDataFim(e.target.value);
  //   // console.log("BLUR: ", e.target.value);
  // };

  useEffect(() => {
    // console.log("CALCULANDO DIAS PASSADOS COM MOMENT...", dataIni, dataFim);

    if (dataIni && dataFim) {
      const dt_moment_i = !moment.isMoment(dataIni) ? moment(dataIni) : dataIni;
      const dt_moment_f = !moment.isMoment(dataFim) ? moment(dataFim) : dataFim;
      // const meses_dif = moment(dataFim).diff(dataIni, "months") + 1;

      // setMeses(meses_dif);
      // console.log("INI: ", dt_moment_i);
      // console.log("FIM: ", dt_moment_f);

      // console.log("Diff : ", dt_moment_f.diff(dt_moment_i, "days") + 1);
      setDias(dt_moment_f.diff(dt_moment_i, "days") + 1);

      // const nr_patern = /^-?\d*\.?\d*$/;
      // mr ? setMr(mr.replace(",", ".")) : "";

      if (mr) {
        const nr_patern = /\d+\.?\d{0,2}\,?\d{0,2}/g;
        const pat = mr.match(nr_patern);
        // console.log("PAT: ", pat);
        setMr(pat ? pat.join().replace(",", ".") : "");
      }

      // if (meses) {
      //   // console.log("MES: ", meses);

      //   const nr_patern = /\[0-9]+/g;
      //   const pattwo = meses.match(nr_patern);
      //   // console.log("PAT MES: ", pattwo);
      // }

      if (correcao) {
        const nr_patern = /\d+\.?\d{0,2}\,?\d{0,2}/g;
        const pat = correcao.match(nr_patern);
        setCorrecao(pat ? pat.join().replace(",", ".") : "");
      }

      if (descontos) {
        const nr_patern = /\d+\.?\d{0,2}\,?\d{0,2}/g;
        const pat = descontos.match(nr_patern);
        setDescontos(pat ? pat.join().replace(",", ".") : "");
      }

      const valor = ((mr / 30) * dias).toFixed(2);
      const valor_mes = ((mr / 12) * meses).toFixed(2);
      // console.log("VALOR: ", mr.match(nr_patern));

      // if (typeof mr !== "number") {
      // setToast({ show: true, variant: "danger", message: "Informe números na MR." });
      // }

      valor && mr ? setValorDias(valor) : "";
      valor_mes && mr ? setValorMeses(valor_mes) : "";
    }

    // return () => {
    //   cleanup;
    // };
  }, [dataIni, dataFim, mr, meses, correcao, descontos]);

  // const settingMr = (mr) => {
  //   console.log("Toast: ", toast);
  // };

  return (
    <div style={{ backgroundColor: "gainsboro" }}>
      <div className="container py-3">
        <Row>
          <Col className="col col-md-6">
            <Data
              type="Inicial"
              calcData={(e) => calcData(e)}
              id="dt_inicial"
              value={dataIni}
              setDate={(e) => setDataIni(e.target.value)}
            />
          </Col>

          <Col className="col col-md-6">
            <Data
              type="Final"
              calcData={(e) => calcData(e)}
              id="dt_final"
              value={dataFim}
              setDate={(e) => setDataFim(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col col-md-3">
            <InputText mr={mr} onChange={(e) => setMr(e.target.value)} label="MR" placeholder="0000,00" value={mr} />
          </Col>
          <Col className="col col-md-3">
            <InputText onChange={(e) => setMeses(e.target.value)} label="Meses de 13º" value={meses} />
          </Col>
          <Col className="col col-md-3">
            <InputText
              label="Correção"
              onChange={(e) => setCorrecao(e.target.value.replace(",", "."))}
              value={correcao}
              placeholder="0,00"
            />
          </Col>
          <Col className="col col-md-3">
            <InputText
              onChange={(e) => setDescontos(e.target.value.replace(",", "."))}
              label="Descontos"
              value={descontos}
              placeholder="0,00"
            />
          </Col>
        </Row>
        <Row>
          <Col className="col col-md-6">
            <Dias dias={dias} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListItens
              dias={dias}
              valorDias={valorDias}
              valorMeses={valorMeses}
              meses={meses}
              descontos={descontos}
              correcao={correcao}
            />
          </Col>
        </Row>
      </div>
      {/* <ToastFactory show={toast.show} variant={toast.variant} toastHeader={toast.header} toastMessage={toast.message} /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
