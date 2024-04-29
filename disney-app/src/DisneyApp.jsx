import Title from "./components/Title";
import "./DisneyApp.css";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Switch from "./components/Switch";
import ThemeProvider from "./context/ThemeContext";
import PaginationControlled from "./components/PaginationControlled";
import PageProvider, { PageContext } from "./context/PageContext";
import { useContext, useEffect } from "react";

const DisneyApp = () => {
  const BASE_URL = "https://api.disneyapi.dev";
  const { page } = useContext(PageContext);

  const { data, isLoading, error } = useFetch(
    `${BASE_URL}/character?page=${page}`
  );

  useEffect(() => {
    console.log("lol");
  }, [page]);

  return (
    <>
      <ThemeProvider>
        <Wrapper direction="column">
          <Header>
            <Title children="Disney+" />
            <Switch />
          </Header>
          <Wrapper spacing="space-between">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {data &&
              data.data.map(({ name, imageUrl }, index) => (
                <Card name={name} imageUrl={imageUrl} key={index} />
              ))}
          </Wrapper>
          <PaginationControlled allPages={data && data.info.totalPages} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default DisneyApp;
