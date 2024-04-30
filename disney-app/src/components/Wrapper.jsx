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
  gap: ${(props) => props.gaps || "1rem"}; // Use gaps instead of gap
  height: fit-content;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spacing === "space-between" ? "space-between" : "none"};
`;

const Wrapper = ({ gaps, children, variant, direction, spacing }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledWrapper
      gaps={gaps} // Pass gaps instead of gap
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
