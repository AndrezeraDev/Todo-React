import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4} from 'uuid'

function App() {


  const [task, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] 
  )

  function onTaskClick(taskId){
    const newTask = task.map(task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    setTasks(newTask)
  }

  function onTaskDelete(taskId){
    // if(window.confirm("Tem certeza que deseja deletar essa tarefa?")){
      const newTask = task.filter(task => task.id !== taskId)   //Filtrar as tarefas que nao serao deletadas, ou seja, as que serao mantidas usando o filter QUE SEJA DIFERENTE DO ID DA TAREFA QUE EU QUERO DELETAR
      setTasks(newTask)                                         //Atualizar as tarefas que nao serao deletadas usando o setTasks
    // }
  }

  const onAddTaskSubmit = (title, description) => {  //Criar uma nova tarefa, ou seja um novo objeto com as informacoes da tarefa
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...task, newTask])

  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task))
  }, [task])

  return(
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6 '>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={task} onTaskClick={onTaskClick } onTaskDelete={onTaskDelete}/>
      </div>
    </div>
  )
}

export default App
