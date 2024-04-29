import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  padding: 1rem;
  background-color: ${(props) => (props.dark ? "#161d2c" : "white")};
  transition: background-color 0.3s ease;
  gap: 1rem;
  height: fit-content;
  align-items: center;
  row-gap: 2rem;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spacing === "space-between" ? "space-between" : "none"};
`;

const Wrapper = ({ children, variant, direction, spacing }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledWrapper
      dark={isDarkMode}
      spacing={spacing}
      direction={direction}
      variant={variant}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
