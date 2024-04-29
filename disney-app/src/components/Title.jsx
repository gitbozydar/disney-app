import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  margin: 0;
  font-size: 2em;
  padding: 0 1rem;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
export default Title;
