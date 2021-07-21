import styled from 'styled-components';
import { Themes } from '../../context/ThemeContext';

interface StylesProps {
  theme: Themes;
}

export const Container = styled.section<StylesProps>`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  font-family: 'Roboto', sans-serif;

  > div {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div > button {
    margin: 10px 5px;
    background-color: ${(props) => props.theme.blue};
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 120px;
  }

  > div > hr {
    margin: 12px 0;
    width: 100%;
  }

  > div > h3 {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button<StylesProps>`
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 20px 40%;
  width: 120px;
`;
