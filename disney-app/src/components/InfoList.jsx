import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../colors";

const StyledList = styled.ul`
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  margin: 0;
  width: 100%;
`;

const InfoList = ({ toMapArray }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <StyledList $dark={isDarkMode}>
      {toMapArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
};
export default InfoList;
