import { TodoProgress } from "./components/TodoProgress/TodoProgress";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItem/TodoItem";
import { AddTodoButton } from "./components/AddTodoButton/AddTodoButton";
import './App.css';


function App() {
  const defaultTodos = [
    {id: 0, text: 'Hola bom dia', completed: true},
    {id: 1, text: 'Hello World', completed: false},
    {id: 3, text: 'Evilchuck', completed: true}
  ]

  return (
    <>
      <TodoProgress current={1} total={10} />
      <TodoFilter />
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItems key={todo.id} content={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <AddTodoButton />
    </>
  );
}

export default App;
