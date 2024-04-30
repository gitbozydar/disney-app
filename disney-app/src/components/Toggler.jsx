import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { colors } from "../colors";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const StyledSwitch = styled(Switch)(({ $dark }) => ({
  ".MuiSwitch-thumb": {
    backgroundColor: $dark ? colors.dark.toggleThumb : colors.light.toggleThumb,
  },
}));

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
