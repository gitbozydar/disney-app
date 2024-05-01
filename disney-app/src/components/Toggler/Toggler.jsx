import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledSwitch } from "./Toggler.styles";

const Toggler = () => {
  const { isDarkMode, handleToggle } = useContext(ThemeContext);

  return (
    <StyledSwitch
      $dark={isDarkMode}
      onChange={handleToggle}
      color="secondary"
    />
  );
};

export default Toggler;
