import React, {useEffect, useState} from "react";
import Task from '../Molecules/Task'
import AddTaskButton from '../Atoms/AddTaskButton'

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      name: "",
      status: "TODO",
      edit: true,
    };
    setTasks(tasks.concat(newTask));
  };

  const completeTask = (index) => {
    let newTasks = tasks.map((task, index) => {
      if (index === index) {
        task.status = "DONE";
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <AddTaskButton
        onClick={() => addTask()}
      />
      {tasks.filter(task => task.status === "TODO").map((filteredTask, index) =>
        <Task
          key={index}
          name={filteredTask.name}
          edit={filteredTask.edit}
          completeTask={() => completeTask(index)}
        />
      )}
    </>
  )
}

export default TaskCard