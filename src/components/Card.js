import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";

export default function Card({ indici, question, answer }) {


  const [exibirBotao, setExibirBotao] = useState(true);
  const [exibirBotaoFinalizado, setExibirBotaoFinalizado] = useState(false);
  const [exibirPergunta, setExibirPergunta] = useState(false);
  const [exibirResposta, setExibirResposta] = useState(false);

  function selectBotao() {
    setExibirBotao(false);
    setExibirPergunta(true);
  }

  function selectPergunta() {
    setExibirPergunta(false);
    setExibirResposta(true);
  }

  function red(){

  }

  return (
    <>
      {exibirBotao && (
        <Botao onClick={ selectBotao}>
          <p>{`Pergunta ${indici}`}</p>
          <img src={setaPlay} alt="setaPlay" />
        </Botao>
      )}

      

      {exibirPergunta && (
        <Pergunta>
          {question}
          <img src={virar} alt="virar" onClick={selectPergunta} />
        </Pergunta>
      )}

      {exibirResposta && (
        <Resposta>
          <p>{answer}</p>
          <ContainerButton>
            <ButtonRed>Não lembrei</ButtonRed>
            <ButtonYellow>Quase não lembrei</ButtonYellow>
            <ButtonGreen>Zap!</ButtonGreen>
          </ContainerButton>
        </Resposta>
      )}
    </>
  );
}

const Botao = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-decoration:${"line-through" };
  }
`;

const Pergunta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Resposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonRed = styled.button`
  background-color: #ff3030;
  width: 85px;
  height: 37px;
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
const ButtonYellow = styled.button`
  background-color: #ff922e;
  width: 85px;
  height: 37px;
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
const ButtonGreen = styled.button`
  background-color: #2fbe34;
  width: 85px;
  height: 37px;
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
