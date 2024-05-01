import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledList } from "./InfoList.styles";

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
