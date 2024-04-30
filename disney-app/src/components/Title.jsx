import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  margin: 0;
  font-size: ${(props) => props.size || "3rem"};
  padding: 0 1rem;
`;

const Title = ({ children, size }) => {
  return <StyledTitle size={size}>{children}</StyledTitle>;
};
export default Title;
