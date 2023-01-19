import './styles/global.css';

import { Habit } from "./components/Habit"

function App() {

  return (
    <div>
    <Habit completed={3}/>
    <Habit completed={10}/>
    <Habit completed={20}/>
    <Habit completed={30}/>      
    </div>
  )
}

export default App
// 1:01
// Componente: Reaproveitar / isolar
// Prioridade: Uma informação enviada para modificar um componente visualmente ou comportamentalmente
