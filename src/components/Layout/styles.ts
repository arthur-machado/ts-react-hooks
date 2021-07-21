import styled from 'styled-components';

interface StylesProps {
  backgroundTheme?: string;
  textColor?: string;
  blue?: string;
}

export const Container = styled.section<StylesProps>`
  height: 100vh;
  width: 100%;

  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.backgroundTheme};
  color: ${(props) => props.textColor};
  font-family: 'Roboto', sans-serif;
`;

export const Button = styled.button<StylesProps>`
  background-color: ${(props) => props.blue};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 20px 40%;
  width: 120px;
`;
