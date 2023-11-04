export default function TaskCard({task, removeTask, toggleTask }){
    const deleteTask = ((evt, key) =>{
        evt.preventDefault();
        //let id = evt.currentTarget.id;
        removeTask(evt.target.parentElement.id);
    })
    const change = ((evt)=>{
        toggleTask(evt.target.parentElement.id);
    })
    return (
        <>
            <div className="text-white flex justify-between py-4 px-5 border border-slate-950 border-xs " id={task.id} >
                    <div className="flex items-center w-6 pl-6 py-2">
                        <button onClick={ deleteTask } id={task.id}>
                            <i className="fa-solid fa-minus text-red-400 cursor-pointer" />
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="ml-0">{task.value}</p>
                    </div>
                    <input type="checkbox" defaultChecked={task.done ? 'checked' : ''} className="accent-amber-300 cursor-pointer" onChange={change}/>
            </div>
        </>

    )
}