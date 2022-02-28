import React from 'react'
import styled from 'styled-components';
import COLOR from '../../../variables/color';
import TEXT from '../../../variables/texts';

const Alert = (props) => {
  return (
    <StyledAlert visible={ props.visible }>
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
  ${(props) =>
    props.visible ? `opacity: 1;` : `opacity: 0;`
  }
`

const StyledMessage = styled.span`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`