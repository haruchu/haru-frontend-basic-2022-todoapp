import React, {useState} from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";

const Task = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Checkbox />
      {edit
        ? <Input defaultValue={ props.text } onEditComplete={() => setEdit(!edit)} />
        : <div><span>{ props.text }</span><EditButton onEdit={() => setEdit(!edit)} /></div>
      }

    </>
  );
}
export default Task;



