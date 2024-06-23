import { useContext } from 'react'
import './TodoProgress.css'
import { TodoContext } from '../../context/TodoContext'

function TodoProgress(){
    const {completedTodos, totalTodos } = useContext(TodoContext)

    let text
    if (totalTodos >= 1 && completedTodos === totalTodos) {
        text = "FELICIDADES!!! ningun TODO pendiente"
    }else{
        text = "Has completado "+completedTodos+" de "+totalTodos+" TODOS"
    }

    return(
        <h1 className="TodoProgress"><span>{text}</span></h1>
    )
}

export { TodoProgress };