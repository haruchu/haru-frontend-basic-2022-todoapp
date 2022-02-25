import React, {useState} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(props.isEditing);

  const editComplete = (isEditing, name) => {
    setIsEditing(!isEditing);
    props.editTask(name);
  }

  return (
    <StyledTask>
      <Checkbox completeTask={props.completeTask}/>
      {isEditing
        ? <Input defaultValue={ props.name } editComplete={(name) => editComplete(isEditing, name)} />
        : <TaskItem><Text>{ props.name }</Text><EditButton onEdit={() => setIsEditing(!isEditing)} /></TaskItem>
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

