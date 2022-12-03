import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Start({ setRenderizarZap, setRenderizarStart }) {
  function iniciar() {
    setRenderizarZap(true);
    setRenderizarStart(false);
  }

  return (
    <ScreenContainer>
      <img src={logo} alt="img do logo" />
      <h1>ZapRecall</h1>
      <button onClick={iniciar} data-test="start-btn">
        <p>Inicar Recall!</p>
      </button>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  img {
    width: 136px;
    height: 161px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  button {
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    height: 54px;
    width: 246px;
  }
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
  }
`;
