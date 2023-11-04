import TaskCard from "./TaskCard"
export default function CompletedTask({tasks ,  removeTask, toggleTask }) {
    return (
        <div className="text-center flex flex-col items-center h-80 mt-10 md:mt-0">
            <h6 className="mb-3 text-white">COMPLETATI</h6>
        <div className=" bg-sky-950 rounded-md w-96 overflow-auto">
                {tasks.map((task)=>{
                    return(
                        <TaskCard task={task} removeTask={ removeTask } toggleTask={ toggleTask } key={task.id}/>
                    )
                })}
            </div>
        </div>
    )
}