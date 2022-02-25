import React from 'react'
import styled from 'styled-components';
import plus from "../../../assets/svg/plus.svg";
import COLOR from '../../../variables/color';
import TEXT from '../../../variables/texts';

const AddTaskButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <IconImg src={plus} />
      <ButtonShadow/>
      <ButtonText>タスクを追加</ButtonText>
    </StyledButton>
  )
}

export default AddTaskButton

const StyledButton = styled.button`
  width: 126px;
  height: 24px;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
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
  border-radius: 12px;
  background-color: ${COLOR.GREEN};
  opacity: 0;
  transition: all 0.2s ease;
`;

const IconImg = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonText = styled.span`
  margin-left: 10px;
  ${TEXT.S}
  color: ${COLOR.GREEN};
`;