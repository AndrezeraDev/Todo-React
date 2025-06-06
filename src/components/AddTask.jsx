import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return(
        <div className="space-y-4 p-6 rounded-md bg-slate-200 shadow flex flex-col">
            <input type="text"
            placeholder="Digite o titulo da tarefa: " 
            className="border-slate-300 outline-slate-400 px-4 py-2"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <input type="text" 
            placeholder="Digite a descrição da tarefa: " 
            className="border-slate-300 outline-slate-400 px-4 py-2"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <button 
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert('Digite algo em title ou description')
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}
            >adicionar</button>
        </div>
    )
}

export default AddTask;