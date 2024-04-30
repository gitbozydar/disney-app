import styled from "styled-components";
import { createPortal } from "react-dom";
import Title from "./Title";
import Button from "./Button";
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import InfoList from "./InfoList";
import { colors } from "../colors";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${(props) =>
    props.$dark ? colors.dark.background : colors.light.background};
  display: flex;
  border-radius: 1rem;
  color: ${(props) =>
    props.$dark ? colors.dark.typography : colors.light.typography};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 0.2rem;
`;

const Modal = ({ onClose, data }) => {
  const { name, imageUrl, films, shortFilms, videoGames, tvShows } = data;
  const { isDarkMode } = useContext(ThemeContext);

  const modal = createPortal(
    <Overlay onClick={onClose}>
      <Content $dark={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={name} />
        <Title>{name}</Title>
        {films.length > 0 && (
          <>
            <Title size="2rem">Films:</Title>
            <InfoList toMapArray={films} />
          </>
        )}
        {shortFilms.length > 0 && (
          <>
            <Title size="2rem">Short films:</Title>
            <InfoList toMapArray={shortFilms} />
          </>
        )}
        {videoGames.length > 0 && (
          <>
            <Title size="2rem">Video games:</Title>
            <InfoList toMapArray={videoGames} />
          </>
        )}
        {tvShows.length > 0 && (
          <>
            <Title size="2rem">TV shows:</Title>
            <InfoList toMapArray={tvShows} />
          </>
        )}

        <Button onClick={onClose}>Close</Button>
      </Content>
    </Overlay>,
    document.body
  );

  return modal;
};

export default Modal;
