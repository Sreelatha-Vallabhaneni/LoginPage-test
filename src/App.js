import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Welcome from './components/welcome';
import LoginForm from './components/login';
import { VL_Grey, device } from './styles/commonStyles';


const AppContainer = styled.div`
  background-color: ${VL_Grey};
  padding-top: 10px;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    width: auto !important;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
  @media ${device.ipad} {
    align-items:center;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <LoginContainer>
        <Welcome />
        <LoginForm/>
      </LoginContainer>
    </AppContainer>
  );
}

export default App;
