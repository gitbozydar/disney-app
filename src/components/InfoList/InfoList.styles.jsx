import styled from "styled-components";
import { colors } from "../../colors";

const StyledList = styled.ul`
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  margin: 0;
  width: 100%;
`;
export { StyledList };
