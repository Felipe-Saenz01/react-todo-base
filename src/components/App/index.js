import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react'
import { AppUI } from './AppUI';

function App() {

  // estado para los TODOS
  const {item: todos, saveTodos: setTodos, loading, error} = useLocalStorage('React-Todo', []);

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      filter={filter}
      setFilter= {setFilter}
      todosFiltered= {todosFiltered}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
