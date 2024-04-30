import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const StyledHeader = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
