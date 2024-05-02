import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { colors } from "../../colors";

const StyledLoading = styled(CircularProgress)(({ $dark }) => ({
  "& .MuiCircularProgress-circle": {
    color: $dark ? colors.dark.typography : colors.light.typography,
  },
}));

export { StyledLoading };
