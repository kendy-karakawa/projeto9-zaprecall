import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import certo from "../assets/img/icone_certo.png"
import erro from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"
import virar from "../assets/img/seta_virar.png";

const VERDE = "#2FBE34"
const AMARELO = "#FF922E"
const VERMELHO = "#FF3030"
const CINZA = "#333333"

export default function Card({ indici, question, answer,answered, setAnswered}) {


  const [exibirBotao, setExibirBotao] = useState(true);
  const [exibirPergunta, setExibirPergunta] = useState(false);
  const [exibirResposta, setExibirResposta] = useState(false);
  const [imgBotao, setImgBotao] = useState(setaPlay)
  const [textDecoration, setTextDecoration] = useState("none")
  const [textColor, setTextcolor] = useState(CINZA)
  const [botaoSelecionados, setBotaoSelecionados] = useState([])
  
  
  

  function selectBotao() {
    if(!botaoSelecionados.includes(indici)){
      setBotaoSelecionados([...botaoSelecionados, indici])
      setExibirBotao(false);
      setExibirPergunta(true);
    }
    
  }

  function selectPergunta() {
    setExibirPergunta(false);
    setExibirResposta(true);
  }

  function botaoFinalizado(color, img){
    setTextDecoration("line-through")
    setTextcolor(color)
    setImgBotao(img)
    setExibirResposta(false);
    setExibirBotao(true);
    setAnswered(answered + 1)
    
  }

  return (
    <>
      {exibirBotao && (
        <Botao onClick={()=> selectBotao(indici)} textColor={textColor} textDecoration={textDecoration}>
          <p data-test="flashcard-text" >{`Pergunta ${indici}`}</p>
          <img src={imgBotao} alt="icone" 
          data-test="play-btn no-icon zap-icon partial-icon "/>
        </Botao>
      )}

      {exibirPergunta && (
        <Pergunta data-test="flashcard-text" >
          {question}
          <img src={virar} alt="virar" onClick={selectPergunta} data-test="turn-btn" />
        </Pergunta>
      )}

      {exibirResposta && (
        <Resposta>
          <p data-test="flashcard-text" >{answer}</p>
          <ContainerButton>
            <ButtonRed onClick={()=> botaoFinalizado(VERMELHO, erro)} data-test="no-btn">Não lembrei</ButtonRed>
            <ButtonYellow onClick={()=> botaoFinalizado(AMARELO,quase)} ata-test="partial-btn">Quase não lembrei</ButtonYellow>
            <ButtonGreen onClick={()=> botaoFinalizado(VERDE,certo)} data-test="zap-btn">Zap!</ButtonGreen>
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
    color: ${props=> props.textColor};
    text-decoration:${props=> props.textDecoration};
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
