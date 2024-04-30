import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../colors";

const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: none;
  max-width: 100px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$dark ? colors.dark.button : colors.light.button};
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  transition: background-color 0.3s ease, color 0.3s ease;
  justify-content: center;
`;

const Button = ({ children, onClick }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledButton onClick={onClick} $dark={isDarkMode}>
      {children}
    </StyledButton>
  );
};
export default Button;
