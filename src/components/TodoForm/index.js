import { useContext, useState } from "react";
import './TodoForm.css'
import { TodoContext } from "../../context/TodoContext";

function TodoForm(){

    const [newTodoValue, setNetTodoValue] = useState('')

    const {setOpenModal, addTodo} = useContext(TodoContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNetTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Continuar aprendiendo React." 
                value={newTodoValue} 
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer" >
                <button 
                    onClick={onCancel} 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--cancel " 
                >
                    Cancelar
                </button>

                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add" 
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}