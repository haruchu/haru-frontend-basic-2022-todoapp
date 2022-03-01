import React from 'react'
import styled from 'styled-components';
import COLOR from '../../../variables/color';
import TEXT from '../../../variables/texts';
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = (props) => {
  return (
    <StyledAlert visible={ props.visible }>
      <StyledMessage>
        {props.errorText}
      </StyledMessage>
    </StyledAlert>
  )
}

export default Alert

const StyledAlert = styled.div`
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  max-width: 400px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    top: 80px;
  }
  ${(props) =>
    props.visible ? `opacity: 1;` : `opacity: 0;`
  }
`

const StyledMessage = styled.span`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`