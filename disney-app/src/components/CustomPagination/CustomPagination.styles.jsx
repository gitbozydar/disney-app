import { colors } from "../../colors";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

const StyledPagination = styled(Pagination)(({ $dark }) => ({
  ".MuiPaginationItem-text": {
    color: $dark ? colors.dark.typography : colors.light.typography,
  },
}));

export { StyledPagination };
