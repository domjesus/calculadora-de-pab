import React from "react";
import { ListGroup } from "react-bootstrap";

const ListItens = (props) => {
  const calculaTotal = () =>
    valorDias && valorMeses
      ? (Number(valorDias) + Number(valorMeses) + Number(correcao) - Number(descontos)).toFixed(2)
      : "-";

  const { dias, meses, valorDias, valorMeses, descontos, correcao } = props;
  return (
    <ListGroup>
      <ListGroup.Item variant="success">
        Rubrica 101: Valor por {dias} dias: <b>{valorDias}</b>
      </ListGroup.Item>
      <ListGroup.Item variant="success">
        Rubrica 104: Valor por {meses} meses: <b>{valorMeses}</b>
      </ListGroup.Item>
      <ListGroup.Item variant="success">
        Correção: Rubrica 110: <b>{correcao}</b>
      </ListGroup.Item>
      <ListGroup.Item variant="warning">
        SubTotal (101+104):{" "}
        <b>{valorDias ? (Number(valorDias) + Number(correcao) + Number(valorMeses)).toFixed(2) : ""}</b>
      </ListGroup.Item>
      <ListGroup.Item variant="danger">
        Descontos (Rubrica 215): <b>{descontos}</b>
      </ListGroup.Item>
      <ListGroup.Item variant="info">
        Total: {valorDias && "R$ "}
        <b>{calculaTotal()}</b>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ListItens;
