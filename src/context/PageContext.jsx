import { createContext, useState } from "react";

export const PageContext = createContext();

const ThemeProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const handlePagination = (value) => {
    setPage(value);
  };

  return (
    <PageContext.Provider value={{ page, setPage, handlePagination }}>
      {children}
    </PageContext.Provider>
  );
};

export default ThemeProvider;
