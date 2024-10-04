import Image from "next/image"
import { useState } from "react";

export default function Taskfield() {
    const [addTask, setAddTask] = useState<string>("");
    const [taskList, setTaskList] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const input = event.target.value;
        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
        setAddTask(formattedInput); 
    }
    const deleteTask = (taskValue:string) => { setTaskList(taskList.filter((task) => { return task !== taskValue })); }
    const maxLength = 70;

    return (
      <div>
        <div className="container mb-5">
          <div className="animated-pic">
            <Image height={150} width={100} src="/raccoon.png" alt="pixel raccoon"/>
          </div>
          <div className="background-pic">
            <img src="/cloud.png" alt="pixel cloud" />
          </div>
        </div>
        <form className="row g-3">
            <div>
                {addTask.length >= maxLength && (
                    <p> Please write a small daily task so you don&apos;t get overwhelmed... </p>
                )}
                {taskList.includes(addTask) && (
                    <div className="alert alert-dark mt-2">
                        There is already such a task in your list!
                    </div>
                )}
            </div>
            <div className="col-auto d-flex" style={{ flex: 1 }}>
                <input onChange={handleInputChange} value={addTask} type="text" className="form-control" placeholder="Write your task here..." maxLength={70} />
                <button type="submit" className="btn btn-dark ms-2" onClick={(e) => {
                    e.preventDefault();
                    setTaskList([...taskList, addTask]);
                    setAddTask("");
                    }}
                    disabled={!addTask.trim() /*For no empty spaces!!!*/ || addTask.length > maxLength || taskList.includes(addTask)}> Add 
                </button>
            </div>
            <div className="task-list">
                {taskList.map((value: string) => {
                    return (
                        <div key={value} className="center-tasks">
                            <p className="m-0"> {value} </p>
                            <button className="resetbtnstyle" onClick={() => deleteTask(value)}>
                                <Image height={40} width={40} alt="heart" src="/heart.png"/>
                            </button>
                        </div>
                    );
                })}
            </div>
        </form>
      </div>
    );
  }
  