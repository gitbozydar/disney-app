import Title from "./components/Title";
import "./DisneyApp.css";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Switch from "./components/Switch";
import { PageContext } from "./context/PageContext";
import PaginationControlled from "./components/PaginationControlled";
import { useContext } from "react";

const DisneyApp = () => {
  const BASE_URL = "https://api.disneyapi.dev";

  const { page } = useContext(PageContext);

  const { data, isLoading, error } = useFetch(
    `${BASE_URL}/character?page=${page}`
  );

  return (
    <>
      <Wrapper direction="column">
        <Header>
          <Title>Disney+</Title>
          <Switch />
        </Header>
        <Wrapper spacing="space-between">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {data &&
            data.data.map(
              (
                { name, imageUrl, films, shortFilms, videoGames, tvShows },
                index
              ) => (
                <Card
                  films={films}
                  shortFilms={shortFilms}
                  videoGames={videoGames}
                  tvShows={tvShows}
                  name={name}
                  imageUrl={imageUrl}
                  key={index}
                />
              )
            )}
        </Wrapper>
        <PaginationControlled allPages={data && data.info.totalPages} />
      </Wrapper>
    </>
  );
};

export default DisneyApp;
