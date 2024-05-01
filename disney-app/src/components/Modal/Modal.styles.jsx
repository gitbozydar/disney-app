import styled from "styled-components";
import { colors } from "../../colors";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${(props) =>
    props.$dark ? colors.dark.background : colors.light.background};
  display: flex;
  border-radius: 1rem;
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 0.2rem;
`;
export { Content, Overlay };
