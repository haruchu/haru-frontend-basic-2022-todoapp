import React, {useEffect, useState} from "react";
import Task from '../Molecules/Task'
import AddTaskButton from '../Atoms/AddTaskButton'

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      name: "",
      status: "TODO",
      isEditing: true,
    };
    setTasks(tasks.concat(newTask));
  };

  const completeTask = (target_index) => {
    let newTasks = tasks.map((task, index) => {
      if (index == target_index) {
        task.status = "DONE";
      }
      return task;
    });
    setTasks(newTasks);
  };

  const editTask = (name, index) => {
    let newTasks = [...tasks];
    if (name == "") {
      //index番目の要素を削除
      newTasks.splice(index, 1);
    }
    else {
      let newTask = {
        status: tasks[index].status,
        name: name,
        isEditing: false,
      };
      //indexの要素を削除して、第３引数の要素に置き換え
      newTasks.splice(index, 1, newTask);
    }
    setTasks(newTasks);
  };

  return (
    <>
      <AddTaskButton
        onClick={() => addTask()}
      />
      {tasks.filter(task => task.status == "TODO").map((filteredTask, index) =>
        <Task
          key={index}
          name={filteredTask.name}
          isEditing={filteredTask.isEditing}
          completeTask={() => completeTask(index)}
          editTask={(value) => editTask(value, index)}
        />
      )}
    </>
  )
}

export default TaskCard