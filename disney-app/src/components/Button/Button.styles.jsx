import { colors } from "../../colors";
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) => (props.$dark ? colors.dark.border : colors.light.border)};
  max-width: 100px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$dark ? colors.dark.button : colors.light.button};
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  justify-content: center;
`;
