import { TodoProgress } from "./components/TodoProgress/TodoProgress";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItem/TodoItem";
import { AddTodoButton } from "./components/AddTodoButton/AddTodoButton";
import './App.css';
import { useState } from "react";


function App() {
  // array default para mostrar TODOS de prueba
  const defaultTodos = [
    {id: 0, text: 'Hola bom dia', completed: true},
    {id: 1, text: 'Hello World', completed: false},
    {id: 2, text: 'Evilchuck', completed: false}
  ]
  // estado para los TODOS
  const [todos, setTodos] = useState(defaultTodos)
  // Variable que almacenará la cantidad de los TODOS que estan completados
  const completedTodos = todos.filter(todo => todo.completed).length
  // Variable que almacenará la cantidad de TODOS sin nigun filtro
  const totalTodos = todos.length

  // Estado para contener y cambiar el valor del input TodoFilter
  const [filter, setFilter] = useState('')
 
  // Variable que almacenará los TODOS filtrados en el TodoFilter
  const todosFiltered = todos.filter((todo) => {
    // Funcion para quitar las tildes a cualquier texto
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    // variables para almacenar los textos a comprar y filtran en minusculas
    const lowerText = noTildes(filter.toLowerCase())
    const lowerFilter = noTildes(todo.text.toLowerCase())
    // Filtro para obtener los TODOS que conciden con el filtro
    return lowerFilter.includes(lowerText)
  })

  //funcion para completar TODOS
  const checkTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }
  
  //funcion para eliminar TODOS
  const deleteTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  

  return (
    <>
      <TodoProgress current={completedTodos} total={totalTodos} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList>
        {todosFiltered.map(todo =>(
          <TodoItems 
            key={todo.id}
            content={todo.text} 
            completed={todo.completed}
            check={() => checkTodo(todo.id)}
            pop={() => deleteTodo(todo.id)}  
          />
        ))}
      </TodoList>
      <AddTodoButton />
    </>
  );
}

export default App;
