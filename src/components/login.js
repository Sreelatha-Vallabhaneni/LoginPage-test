import React, { useState } from 'react';
import styled from "styled-components";
import { BX_Shadow, FF_Montserrat, FS_36, device, FW_NM_500, Purple, Grey, } from '../styles/commonStyles';
import '../../src/App.css'

const LoginContainer = styled.div`
  width: 622px;
  height: 500px;
  font-family: ${FF_Montserrat};
  display: flex;
  justify-content: center;
  box-shadow: ${BX_Shadow};
  @media ${device.ipad} {
    width: 500px;
  }
`;
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
  width: 203px;
  display: flex;
  
`;


function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [radio, setRadio] = useState(false);
    return (
      <LoginContainer>
        <form>
          <Title>
            <p
              style={{
                borderBottom: `2px solid ${Purple}`,
                fontSize: `${FS_36}px`,
              }}
            >
              User &nbsp;
            </p>
            <h3
              style={{ fontWeight: `${FW_NM_500}px`, fontSize: `${FS_36}px` }}
            >
              login
            </h3>
          </Title>
          <FormWrapper>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="jane@company.com"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder=""
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </FormWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="radio"
                value={email ?? radio}
                onChange={(e) => setRadio(e.target.value)}
                style={{ width: "10px" }}
              />{" "}
              <label style={{ fontSize: "14px", color:`${Grey}` }}>Remember me</label>
            </div>
            <p style={{ fontSize: "14px", color:`${Grey}` }}>Forgot password?</p>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
              <button style={{width:'243px', height:'40px',background: 'linear-gradient(89.62deg, #48425C 0.32%, #6F6884 99.67%)', textAlign:'center', color:'white', borderRadius:'10px', border:'none'}} type="submit">Login </button>
          </div>          
        </form>
      </LoginContainer>
    );
}

export default LoginForm;