import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: none;
  max-width: 100px;
  cursor: pointer;
  background-color: ${(props) => (!props.dark ? "#161d2c" : "grey")};
  color: ${(props) => (props.dark ? "#161d2c" : "white")};
  transition: background-color 0.3s ease, color 0.3s ease;

  justify-content: center;
`;

const Button = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return <StyledButton dark={isDarkMode}>{children}</StyledButton>;
};
export default Button;
