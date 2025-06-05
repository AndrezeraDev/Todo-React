import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 1° importação do router

const router = createBrowserRouter([ //2° criação do router
  {
    path: "/", //caminho da rota
    element: <App />, //element é o componente que vai ser renderizado na rota "/" (página inicial) 'padrão'
  },
  {
    path: "/task", //caminho da rota
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />   {/*3° renderização do router*/}
  </StrictMode>,
)
