import styled from "styled-components";
import React from "react";
import Logo from "./Logo";
import Cards from "./Cards";
import Footer from "./Footer";
import { useState } from "react";
import deck from "./deck";

export default function ZapRecall() {
  const cardQuanty = deck.length;
  const [answered, setAnswered] = useState(0);
//   const [listaIMG, setListaIMG] = useState([])

  return (
    <ScreenContainer>
      <Logo />
      <Cards answered={answered} setAnswered={setAnswered} />
      <Footer cardQuanty={cardQuanty} answered={answered} />
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
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
