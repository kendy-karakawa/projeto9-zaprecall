import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Logo(){
    return (
        <LogoContainer>
            <img src={logo} alt="img do logo"/>
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
  width: 52px;
  }
  h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}

`