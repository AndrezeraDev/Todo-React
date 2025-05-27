import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {


  const [task, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "Estudar programação durante o dia",
    isCompleted: false
  },
  {
    id: 2,
    title: "Passear com o cachorro",
    description: "Passear com o cachorro de manhã",
    isCompleted: false
  },
  {
    id: 3,
    title: "Arrumar o quarto",
    description: "Arrumar o meu quarto",
    isCompleted: false
  }])

  function onTaskClick(taskId){
    const newTask = task.map(task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    setTasks(newTask)
  }

  return(
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        {/* <AddTask /> */}
        <Tasks tasks={task} onTaskClick={onTaskClick}/>
      </div>
    </div>
  )
}

export default App
