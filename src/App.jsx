import { useState } from 'react'
import Input from './components/Input'
import ButtonInput from './components/ButtonInput'
import ToDo from './components/ToDo'
import CompletedTask from './components/CompletedTask'
function App() {
  const [ textInput, setTextInput ] = useState('');
  const [tasks, setTasks ] = useState([
    {
      id : 0,
      value : "Fare colazione",
      done : false
    },
    {
      id : 1,
      value : "Lavare i denti",
      done : false
    },
    {
      id : 2,
      value : "Fare la barba",
      done : false
    },
    {
      id : 3,
      value : "Vestirsi",
      done : true
    },
    {
      id : 4,
      value : "Deodorante",
      done : true
    },
  ])

  const removeTask = (id) =>{
    let filteredTask = []
    filteredTask = tasks.filter((task) => task.id != id)
    setTasks(filteredTask);
  }
  const formSubmitted = (evt)=>{
      evt.preventDefault();
      let newTask = {
        id : new Date(),
        value : textInput,
        done : false
      }
      setTextInput('');
      setTasks((prev) =>[
        ...prev,
        newTask
      ])
  }

  const toggleTask = ((id)=>{
    const toggledTasks = tasks.map((task) =>{
      if (task.id == id){
        task.done = !task.done
      }
      return task;
    })
    setTasks(toggledTasks);
  })
  return (
    <div className='h-screen  bg-slate-900 flex flex-col items-center'>
      <div className="flex items-center justify-center h-52 md:h-36 w-full mb-36 md:my-0 md:mx-0">
        <form action="submit" onSubmit={ formSubmitted }>
          <Input setTextInput={setTextInput} textInput={ textInput }/>
          <ButtonInput/>
        </form>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly h-36 w-full md:mx-0">
        <ToDo tasks={tasks.filter((item)=>item.done != true)} removeTask={ removeTask } toggleTask={ toggleTask }/>
        <CompletedTask tasks={tasks.filter((item)=>item.done == true)} removeTask={ removeTask } toggleTask={ toggleTask }/>
      </div>
    </div>
  )
}

export default App
