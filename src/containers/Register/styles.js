import styled from 'styled-components';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  background: transparent;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: #252525;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 50%;
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: ${(props) => props.theme.purple};
  height: 50px;
  margin-top: 80px;
  gap: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 2px;
  width: 100%;
  width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }
  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
`;
