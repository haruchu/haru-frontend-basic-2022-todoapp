import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = (props) => {
  const ref = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    ref.current.focus();
    ref.current.value = props.defaultValue;
  }, []);

  const onEditComplete = () => {
    setText(ref.current.value);
  }

  const pressEnter = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      onEditComplete();
    }
  }

  return (
      <StyledInput
        type="text"
        ref={ref}
        onKeyPress={pressEnter}
        onBlur={onEditComplete}
      />
  );
}
export default Input;

const StyledInput = styled.input`
  width: 232px;
  height: 20px;
  padding: 0px 4px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.BLACK};
  ${TEXT.S}
  border: none;
  border-radius: 2px;
  &:focus{
    outline: none;
  }
`