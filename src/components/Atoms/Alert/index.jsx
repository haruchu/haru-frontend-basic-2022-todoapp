import React from 'react'
import styled from 'styled-components';
import COLOR from '../../../variables/color';
import TEXT from '../../../variables/texts';

const Alert = (props) => {
  return (
    <StyledAlert className={props.className}>
      <StyledMessage>
        message
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
  opacity: 0;
  &.alerting {
    opacity: 1;
  }
`

const StyledMessage = styled.span`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`