import { useContext } from 'react'
import './AddTodoButton.css'
import { TodoContext } from '../../context/TodoContext'

function AddTodoButton() {

  const {openModal, setOpenModal} = useContext(TodoContext)

  const handleClick = (event) =>{
    setOpenModal(!openModal)
  }

  return (
    <button className="AddTodoButton" onClick={handleClick} > + </button>
  );
}

export { AddTodoButton }