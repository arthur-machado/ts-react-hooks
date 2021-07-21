import styled from 'styled-components';
import { Themes } from '../../context/ThemeContext';

interface StylesProps {
  theme: Themes;
}

export const Container = styled.section<StylesProps>`
  height: 100vh;
  width: 100%;

  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  font-family: 'Roboto', sans-serif;
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
