import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

const Card = ({ name, imageUrl }) => {
  return (
    <StyledCard>
      <StyledImage src={imageUrl} alt={name} />
      <StyledTitle>{name}</StyledTitle>
    </StyledCard>
  );
};
export default Card;
