import styled from "styled-components";
import React from "react";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ScreenContainer>
      <Logo/>
      <Cards />
      <Footer />
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
