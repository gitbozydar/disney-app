import { colors } from "../../colors";
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: none;
  max-width: 100px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$dark ? colors.dark.button : colors.light.button};
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  transition: background-color 0.3s ease, color 0.3s ease;
  justify-content: center;
`;
