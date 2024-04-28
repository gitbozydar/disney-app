import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  height: fit-content;
  padding: 1rem 1.5rem;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
