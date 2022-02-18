import React, {useState} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";

const Task = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <StyledTask>
      <Checkbox />
      {edit
        ? <Input defaultValue={ props.text } onEditComplete={() => setEdit(!edit)} />
        : <TaskItem><Text>{ props.text }</Text><EditButton onEdit={() => setEdit(!edit)} /></TaskItem>
      }

    </StyledTask>
  );
}
export default Task;

const StyledTask = styled.div`
  display: flex;
  align-items: center;
`

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 232px;
`

const Text = styled.span`
  margin-right: 10px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
`

