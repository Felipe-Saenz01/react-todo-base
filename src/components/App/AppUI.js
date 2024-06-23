import { TodoProgress } from "../TodoProgress";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import './App.css';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    filter,
    setFilter,
    todosFiltered,
    checkTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoProgress current={completedTodos} total={totalTodos} />
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList>
                {loading && <p>Cargando TODOS...</p>}
                {error && <p>Ocurrió un error :c</p>}
                {(!loading && todosFiltered.length === 0) && <p>Crea tu primer TODO!!</p>}
                {todosFiltered.map(todo => (
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
    )
}

export { AppUI }