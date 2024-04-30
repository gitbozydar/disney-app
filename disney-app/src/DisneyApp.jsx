import Title from "./components/Title";
import "./DisneyApp.css";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import { PageContext } from "./context/PageContext";
import PaginationControlled from "./components/PaginationControlled";
import { useContext } from "react";
import Toggler from "./components/Toggler";

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
          <Toggler />
        </Header>
        <Wrapper spacing="space-between">
          {isLoading && <Title>Loading...</Title>}
          {error && <Title>Error...</Title>}
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
        {data && <PaginationControlled allPages={data.info.totalPages} />}
      </Wrapper>
    </>
  );
};

export default DisneyApp;
