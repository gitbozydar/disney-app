import Title from "./components/Title";
import "./DisneyApp.css";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Switch from "./components/Switch";
import ThemeProvider from "./context/ThemeContext";

function DisneyApp() {
  const BASE_URL = "https://api.disneyapi.dev";

  const { data, isLoading, error } = useFetch(`${BASE_URL}/character?page=2`);

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
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default DisneyApp;
