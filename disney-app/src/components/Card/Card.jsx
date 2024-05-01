import Button from "../Button/Button";
import { useContext, useState } from "react";
import { StyledCard, StyledImage, StyledTitle } from "./Card.styles";
import Modal from "../Modal/Modal";
import { ThemeContext } from "../../context/ThemeContext";

const Card = ({
  name,
  imageUrl,
  id,
  films,
  shortFilms,
  videoGames,
  tvShows,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfo = () => {
    setShowModal(true);
  };

  return (
    <StyledCard key={id} $dark={isDarkMode}>
      <StyledImage src={imageUrl} alt={name} />
      <StyledTitle>{name}</StyledTitle>
      <Button onClick={handleMoreInfo}>More Info</Button>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          data={{ name, imageUrl, id, films, shortFilms, videoGames, tvShows }}
        />
      )}
    </StyledCard>
  );
};
export default Card;
