import styled from "styled-components";
import { colors } from "../../colors";

const StyledTitle = styled.h1`
  display: flex;
  margin: 0;
  font-size: ${(props) => props.size || "3rem"};
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  transition: color 0.3s ease;
  padding: 0 1rem;
`;

export { StyledTitle };
