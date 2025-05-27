

function Tasks(props){
    return(
        <ul className="space-y-4 p-6 rounded-md bg-slate-200 shadow">
            {props.tasks.map((task) => (
            <li key={task.id} className="flex">
            <button className="bg-slate-400 text-white p-2 rounded-md w-full">{task.title}</button>
            <button>Ver detalhes</button>
            </li>
            
        ))}</ul>
    )
}

export default Tasks;