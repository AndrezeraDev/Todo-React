import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function TaskPage() {
    const [ searchParams ] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            
            
            <div className='w-screen h-screen bg-slate-500 flex justify-center p-6 '>
            <div className='w-[500px] space-y-4'>
                
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className=" rounded-md absolute left-0 top-0 bottom-0">
                        <ChevronLeftIcon className="w-6 h-6 text-slate-100" />
                    </button>
                    <h1 className='text-3xl text-slate-100 font-bold text-center'>Detalhes da tarefa</h1>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h1 className="text-slate-700 text-xl font-bold">Tarefa: {title}</h1>
                    <p className="text-slate-600">Descrição: {description}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TaskPage