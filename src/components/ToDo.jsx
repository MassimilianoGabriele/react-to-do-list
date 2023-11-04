import TaskCard from "./TaskCard";
export default function ToDo({tasks , removeTask, toggleTask}) {
    return (
        <>
        <div className="flex flex-col text-center items-center h-80">
            <h6 className="mb-3 text-white">TO DO</h6>
            <div className="flex flex-col bg-sky-950 rounded-md w-96 overflow-auto ">
                {tasks.map((task)=>{
                    return(
                        <TaskCard task={task} removeTask={ removeTask } toggleTask={ toggleTask } key={task.id}/>
                    )
                })}
            </div>
        </div>
            
        </>
    )
}