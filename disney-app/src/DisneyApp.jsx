import Title from "./components/Title/Title";
import "./DisneyApp.css";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import { PageContext } from "./context/PageContext";
import { useContext } from "react";
import Toggler from "./components/Toggler/Toggler";
import CustomPagination from "./components/CustomPagination/CustomPagination";
import Loading from "./components/Loading/Loading";

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
        <Wrapper spacing="center">
          {isLoading && <Loading />}
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
        {data && <CustomPagination allPages={data.info.totalPages} />}
      </Wrapper>
    </>
  );
};

export default DisneyApp;
