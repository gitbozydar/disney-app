import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, size }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledTitle $dark={isDarkMode} size={size}>
      {children}
    </StyledTitle>
  );
};
export default Title;
