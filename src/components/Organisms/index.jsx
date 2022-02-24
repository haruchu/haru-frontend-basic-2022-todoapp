import React, {useEffect, useState} from "react";
import Task from '../Molecules/Task'
import AddTaskButton from '../Atoms/AddTaskButton'

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskItems, setTaskItems] = useState([]);

  const addTask = (name, edit) => {
    setTaskItems([
      ...taskItems,
      <Task
      name={name}
      edit={edit}
      />
    ])
  }

  useEffect(() => {
    tasks.filter( task =>  task.status === "TODO" ).map(filteredTask => {
      addTask(filteredTask.name, false)
    })
  }, [tasks])


  return (
    <>
      <AddTaskButton
        onClick={() => addTask("", true)}
      />
      { taskItems }
    </>
  )
}

export default TaskCard