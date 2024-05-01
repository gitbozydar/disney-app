import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { colors } from "../../colors";

const StyledSwitch = styled(Switch)(({ $dark }) => ({
  ".MuiSwitch-thumb": {
    backgroundColor: $dark ? colors.dark.toggleThumb : colors.light.toggleThumb,
  },
}));

export { StyledSwitch };
