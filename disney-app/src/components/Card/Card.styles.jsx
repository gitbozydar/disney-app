import { colors } from "../../colors";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  height: 200px;
  border: 1px solid black;
  border-radius: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) =>
    props.$dark ? colors.dark.card : colors.light.card};
  color: ${(props) => (!props.$dark ? "#000000" : "white")};
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.01) translateY(-5px);
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  overflow: hidden;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

export { StyledCard, StyledImage, StyledTitle };
