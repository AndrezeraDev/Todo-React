function AddTask(){
    return(
        <div className="space-y-4 p-6 rounded-md bg-slate-200 shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa: " className="border-slate-300 outline-slate-400 px-4 py-2"/>
            <input type="text" placeholder="Digite a descrição da tarefa: " className="border-slate-300 outline-slate-400 px-4 py-2"/>
            <button className="">adicionar</button>
        </div>
    )
}

export default AddTask;