import { StyledLoading } from "./Loading.styles";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Loading = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return <StyledLoading $dark={isDarkMode} />;
};
export default Loading;
