import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png"

export default function Cards() {
  const cardList = [
    {
      key: 1,
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      key: 2,
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      key: 3,
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
    },
    {
      key: 4,
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      key: 5,
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      key: 6,
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      key: 7,
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      key: 8,
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <ul>
      {cardList.map((cardList) => (
        <div>
          <Fechado key={cardList.key}>
            <p>{`Pergunta ${cardList.key}`}</p>
            <img src={setaPlay} alt="setaPlay" />
          </Fechado>
          <Aberto>{cardList.question}
          <img src={virar} alt="virar"/>
          </Aberto>
          <Resposta>
            <p>{cardList.answer}</p>
            <ContainerButton>
              <ButtonRed>Não lembrei</ButtonRed>
              <ButtonYellow>Quase não lembrei</ButtonYellow>
              <ButtonGreen>Zap!</ButtonGreen>
            </ContainerButton>
          </Resposta>
        </div>
      ))}
    </ul>
  );
}

const Fechado = styled.li`
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
  }
`;

const Aberto = styled.li`
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

const Resposta = styled.li`
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
