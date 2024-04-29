import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: none;
  max-width: 100px;
  cursor: pointer;
  justify-content: center;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default Button;
