import styled from "styled-components";
import React from "react";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [cardQuanty, setCardQuanty] = useState(0)
  const [answered, setAnswered] = useState(0)


  return (
    <ScreenContainer>
      <Logo/>
      <Cards />
      <Footer cardQuanty={cardQuanty} answered={answered}/>
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
