import React from 'react';
import welcomeBack from '../images/welcome-back.png';
import styled from "styled-components";
import "../styles/commonStyles";
import { BX_Shadow, FF_Montserrat, FS_24, FW_NM_500, Grey, L_Grey, device} from '../styles/commonStyles';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:500px;
  height:500px;
  background-color: ${L_Grey};
  border-radius: 30px 0px 0px 30px;
  top: calc(50% - 177px / 2 - 193px);
  box-shadow: ${BX_Shadow};
  @media ${device.tablet} {
  }
`;
const Text = styled.p`
  font-size: ${FS_24}px;
  font-family: ${FF_Montserrat};
  font-weight: ${FW_NM_500};
  color: ${Grey};
  height: 177px;
  line-height: 42px;
  text-align: center;
`;
const Image = styled.img`
  @media ${device.tablet} {
    width: 350px;
  }
  @media ${device.ipad} {
    width: 500px;
  }
`;

const Welcome = () => {
    return (
      <WelcomeContainer>
        <Text>
          Welcome back!
          <br />
          Nice to see you again, we hope <br />
          you are doing great
        </Text>
        <Image src={welcomeBack} alt="welcomeBack" />
      </WelcomeContainer>
    );
}

export default Welcome;