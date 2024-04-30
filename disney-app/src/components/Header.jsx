import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const StyledHeader = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (!props.dark ? "black" : "white")};
  transition: color 0.3s ease;
  width: 100%;
`;

const Header = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <StyledHeader dark={isDarkMode}>{children}</StyledHeader>;
};

export default Header;
