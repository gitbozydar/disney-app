import styled from "styled-components";
import { colors } from "../../colors";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  padding: 1rem;
  background-color: ${(props) =>
    props.$dark ? colors.dark.background : colors.light.background};
  transition: background-color 0.3s ease;
  gap: ${(props) => props.$gaps || "1rem"};
  min-height: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props) => props.spacing || "row"};
`;
export { StyledWrapper };
