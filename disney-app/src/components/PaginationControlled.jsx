import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PageContext } from "../context/PageContext";
import { ThemeContext } from "../context/ThemeContext";

const PaginationControlled = ({ allPages }) => {
  const { page, setPage } = useContext(PageContext);
  const { isDarkMode } = useContext(ThemeContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="primary"
        count={allPages}
        page={page}
        sx={{
          "& .MuiPaginationItem-page, & .MuiPaginationItem-ellipsis, & .MuiPaginationItem-icon":
            {
              color: !isDarkMode ? "black" : "white",
            },
        }}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationControlled;
