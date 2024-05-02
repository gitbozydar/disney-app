import { useContext } from "react";
import { PageContext } from "../../context/PageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledPagination } from "./CustomPagination.styles";

const CustomPagination = ({ allPages }) => {
  const { handlePagination, page } = useContext(PageContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledPagination
      $dark={isDarkMode}
      page={page}
      count={allPages}
      onChange={(event, value) => handlePagination(value)}
    />
  );
};

export default CustomPagination;
