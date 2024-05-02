import { createPortal } from "react-dom";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import InfoList from "../InfoList/InfoList";
import { StyledContent, StyledImg, StyledOverlay } from "./Modal.styles";
import Wrapper from "../Wrapper/Wrapper";

const Modal = ({ onClose, data }) => {
  const { name, imageUrl, films, shortFilms, videoGames, tvShows } = data;
  const { isDarkMode } = useContext(ThemeContext);

  const modal = createPortal(
    <StyledOverlay onClick={onClose}>
      <StyledContent $dark={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <StyledImg src={imageUrl} alt={name} />
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
      </StyledContent>
    </StyledOverlay>,
    document.body
  );

  return modal;
};

export default Modal;
