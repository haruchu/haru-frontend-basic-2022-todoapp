import React from 'react'
import styled from 'styled-components'
import COLOR from '../../../variables/color'
import check from "../../../assets/svg/check.svg";

const Checkbox = (props) => {
  return (
    <CheckboxButton onClick={props.taskComplete}>
      <CheckImg src={check}/>
    </CheckboxButton>
  )
}

export default Checkbox

const CheckboxButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding: 0;
  background-color: transparent;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  cursor: pointer;
  &:hover > img {
    opacity: 1;
  }
`

const CheckImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
`