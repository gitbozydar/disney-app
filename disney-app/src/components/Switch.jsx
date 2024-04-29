import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  border: 1px solid #222222;
  border-radius: 25px;
  height: 25px;
  margin: 0 0.75rem;
`;

const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const SwitchButton = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#696969" : "white")};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
`;

const SwitchSlider = styled.span`
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 21px;
  height: 21px;
  background-color: #333;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: translateX(${({ checked }) => (checked ? "25px" : "0")});
`;

const Switch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const onToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <ToggleSwitch>
      <HiddenInput checked={isDarkMode} onChange={onToggle} />
      <SwitchButton checked={isDarkMode}>
        <SwitchSlider checked={isDarkMode} />
      </SwitchButton>
    </ToggleSwitch>
  );
};

export default Switch;
