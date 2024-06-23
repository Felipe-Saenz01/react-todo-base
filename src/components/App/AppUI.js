import { TodoProgress } from "../TodoProgress";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import './App.css';

function AppUI({
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