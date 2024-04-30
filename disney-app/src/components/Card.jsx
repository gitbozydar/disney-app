import styled from "styled-components";
import Button from "./Button";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Modal from "./Modal";
import { colors } from "../colors";

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  height: 200px;
  border: 0.5rem solid black;
  border-radius: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.$dark ? colors.dark.card : colors.light.card};
  color: ${(props) => (!props.$dark ? "#000000" : "white")};
  transition: background-color 0.3s ease, color 0.3s ease;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  overflow: hidden;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

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
