import React, {useEffect, useState} from "react";
import Task from '../Molecules/Task'
import AddTaskButton from '../Atoms/AddTaskButton'

const TaskCard = () => {
  const [tasks, setTasks] = useState([
    {
      name: "todo1",
      status: "TODO"
    },
    {
      name: "todo2",
      status: "DONE"
    },
    {
      name: "todo3",
      status: "TODO"
    },
    {
      name: "",
      status: "TODO"
    }
  ]);
  const task_array = [];
  tasks.filter(task => task.status === "TODO").map(task => (
    task_array.push(
      <Task
        name={task.name}
        edit={false}
      />
    )
  ));

  return (
    <>
      <AddTaskButton
        onClick={() => task_array.push(
          <Task
            name=""
            edit
          />
        )}
      />
      { task_array }
    </>
  )
}

export default TaskCard