import React from 'react';
import logoImg from '../images/logo.png';
import styled from 'styled-components';
import '../styles/commonStyles';
import { White, FS_18 } from '../styles/commonStyles';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 15px;
  height: 56px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  padding-left: 30px;
  background-color: ${White};
`;
const Logo = styled.img`
  width: 146px;
  height: 28px;  
`;
const HubContainer = styled.p`
  width: 49px;
  height: 40px;
  top: -40px;
  font-size: ${FS_18}px;
  line-height: 23px;
`;

function Header() {
    return (
      <HeaderContainer>
        <Logo src={logoImg} alt="logo" classsName="logo" />
        <HubContainer>HUB</HubContainer>
      </HeaderContainer>
    );
}

export default Header;