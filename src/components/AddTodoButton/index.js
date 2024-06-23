import './AddTodoButton.css'

function AddTodoButton() {

  const handleClick = (event) =>{
    console.log('Add Todo click!')
    console.log(event.target)
  }

  return (
    <button className="AddTodoButton" onClick={handleClick} > + </button>
  );
}

export { AddTodoButton }