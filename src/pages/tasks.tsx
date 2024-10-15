import ToDoList from "@/Components/ToDoList";
import { useState } from "react";

export default function Tasks() {
    const [addTask, setAddTask] = useState<string>("");
    const [taskList, setTaskList] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const input = event.target.value;
        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
        setAddTask(formattedInput); 
    }
    const deleteTask = (taskValue:string) => { setTaskList(taskList.filter((task) => { return task !== taskValue })); }
    const maxLength = 50;

    return (
      <div className="tasks-container">
        <div className="container mb-1">
          <div className="d-flex justify-content-center mt-4">
            <img src="bubble.png" alt="Type Here Bubble" className="w-50"/>
          </div>
        </div>
        <form className="row g-3 mb-3">
            <div>
                {addTask.length >= maxLength && (
                    <p className="alert alert-light"> 
                        Please write a small daily task so you don&apos;t get overwhelmed... 
                    </p>
                )}
                {taskList.includes(addTask) && (
                    <div className="alert alert-light">
                        There is already such a task in your list!
                    </div>
                )}
            </div>
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
                <input onChange={handleInputChange} value={addTask} type="text" className="form-control" placeholder="Write your task here..." maxLength={50} style={{ flex: 1 }} />
                <button type="submit" className="btn border-0 ms-2" 
                    onClick={(e) => {
                        e.preventDefault();
                        setTaskList([...taskList, addTask]);
                        setAddTask("");
                        }}
                    disabled={!addTask.trim() || addTask.length > maxLength || taskList.includes(addTask)}>
                    <img style={{height: 30, width: 60}} src="/add.png" alt="Add button" />
                </button>
            </div>         
        </form>
        <ToDoList taskList={taskList} deleteTask={deleteTask}/>
      </div>
    );
  }
  