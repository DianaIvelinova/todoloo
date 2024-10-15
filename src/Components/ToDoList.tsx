import Image from "next/image"

interface ToDoListProps {
    taskList: string[];
    deleteTask: (taskValue: string) => void;
}

export default function ToDoList({ taskList, deleteTask }: ToDoListProps) {  
    return (
        <div className="d-flex">
            <Image height={60} width={60} alt="" src="/avatar.png"/>
            <div className="tasks-list">You added
                <div className="border border-5" style={{minHeight: 150}}>
                    {taskList.length == 0 
                        && <div className="m-3 h2 d-flex justify-content-center align-items-center"> Loading tasks... <div className="lds-heart"><div></div></div> </div>                             
                        ||taskList.map((value: string) => {
                        return (
                            <div key={value} className="center-tasks">                                    
                                <div> 
                                    <p className="m-0  p-2" style={{color: "#ffffff"}}> * {value} </p>
                                </div>
                                <button className="btn" onClick={() => deleteTask(value)}>
                                    <Image height={25} width={25} alt="/heart.png" src="/close.png"/>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div> 
        </div>
     );
}
  