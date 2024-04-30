import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../colors";

const StyledTitle = styled.h1`
  display: flex;
  margin: 0;
  font-size: ${(props) => props.size || "3rem"};
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  transition: color 0.3s ease;
  padding: 0 1rem;
`;

const Title = ({ children, size }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledTitle $dark={isDarkMode} size={size}>
      {children}
    </StyledTitle>
  );
};
export default Title;
