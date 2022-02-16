import React from 'react'
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from '../../../variables/color';

const SampleButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <ButtonShadow />
      <IconImg src={props.icon} />
    </StyledButton>
  )
}

const EditButton = () => {
  return <SampleButton onClick={() => console.log("clicked")} icon={pencil}/>
}

export default EditButton

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  &:hover > div {
    opacity: 0.2;
  }
`;

const ButtonShadow = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY};
  opacity: 0;
  transition: 0.2s;
`;

const IconImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;