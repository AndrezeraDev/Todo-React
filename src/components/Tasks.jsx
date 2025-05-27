import { ChevronRightIcon, TrashIcon } from "lucide-react";


function Tasks({ onTaskClick, onTaskDelete, tasks }) {
    return (
        <ul className="space-y-4 p-6 rounded-md bg-slate-200 shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2 items-stretch">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 text-white text-left p-2 rounded-md flex-1 ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>
                    <button className="flex items-center justify-center bg-slate-400 rounded-md text-white w-10">
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => onTaskDelete(task.id)} 
                        className="flex items-center justify-center bg-slate-400 rounded-md text-white w-10">
                        <TrashIcon className="w-6 h-6" />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;