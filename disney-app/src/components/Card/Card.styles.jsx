import { colors } from "../../colors";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  height: 200px;
  border: 0.5rem solid black;
  border-radius: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.$dark ? colors.dark.card : colors.light.card};
  color: ${(props) => (!props.$dark ? "#000000" : "white")};
  transition: background-color 0.3s ease, color 0.3s ease;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  overflow: hidden;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;
export { StyledCard, StyledImage, StyledTitle };
