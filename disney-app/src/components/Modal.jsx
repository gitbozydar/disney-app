import styled from "styled-components";
import { createPortal } from "react-dom";
import Title from "./Title";
import Button from "./Button";
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import InfoList from "./InfoList";
import Wrapper from "./Wrapper";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${(props) => (props.dark ? "black" : "#fff")};
  color: ${(props) => (props.dark ? "white" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Modal = ({ onClose, data }) => {
  const { name, imageUrl, films, shortFilms, videoGames, tvShows } = data;
  const { isDarkMode } = useContext(ThemeContext);

  const modal = createPortal(
    <ThemeProvider>
      <Overlay onClick={onClose}>
        <Content dark={isDarkMode} onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt={name} />
          <Title>{name}</Title>
          {films.length > 0 && (
            <Wrapper direction="column" gaps="0.1rem">
              <Title size="2rem">Films:</Title>
              <InfoList toMapArray={films} />
            </Wrapper>
          )}
          {shortFilms.length > 0 && (
            <Wrapper direction="column" gaps="0.1rem">
              <Title size="2rem">Short films:</Title>
              <InfoList toMapArray={shortFilms} />
            </Wrapper>
          )}
          {videoGames.length > 0 && (
            <Wrapper direction="column" gaps="0.1rem">
              <Title size="2rem">Video games:</Title>
              <InfoList toMapArray={videoGames} />
            </Wrapper>
          )}
          {tvShows.length > 0 && (
            <Wrapper direction="column" gaps="0.1rem">
              <Title size="2rem">TV shows:</Title>
              <InfoList toMapArray={tvShows} />
            </Wrapper>
          )}

          <Button onClick={onClose}>Close</Button>
        </Content>
      </Overlay>
    </ThemeProvider>,
    document.body
  );

  return modal;
};

export default Modal;
