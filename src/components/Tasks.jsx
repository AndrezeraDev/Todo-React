import { ChevronRightIcon } from "lucide-react";


function Tasks(props){
    return(
        <ul className="space-y-4 p-6 rounded-md bg-slate-200 shadow">
            {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button 
                onClick={() => props.onTaskClick(task.id)} 
                className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}>
                {task.title}
                </button>
                <button >
                    <ChevronRightIcon  className="bg-slate-400 p-2 rounded-md text-white" />
                </button>
            </li>
            
        ))}</ul>
    )
}

export default Tasks;