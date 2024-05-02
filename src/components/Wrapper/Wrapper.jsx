import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledWrapper } from "./Wrapper.styles";

const Wrapper = ({ gaps, children, variant, direction, spacing }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledWrapper
      $gaps={gaps}
      $dark={isDarkMode}
      spacing={spacing}
      direction={direction}
      variant={variant}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
