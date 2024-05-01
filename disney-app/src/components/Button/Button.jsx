import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledButton } from "./Button.styles";

const Button = ({ children, onClick }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledButton onClick={onClick} $dark={isDarkMode}>
      {children}
    </StyledButton>
  );
};
export default Button;
