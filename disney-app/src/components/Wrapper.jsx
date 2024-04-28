import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  padding: 1rem;
  gap: 1rem;
  height: fit-content;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spacing === "space-between" ? "space-between" : "none"};
`;

const Wrapper = ({ children, variant, direction, spacing }) => {
  return (
    <StyledWrapper spacing={spacing} direction={direction} variant={variant}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
