import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0;
`;

const InfoList = ({ toMapArray }) => {
  return (
    <StyledList>
      {toMapArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
};
export default InfoList;
