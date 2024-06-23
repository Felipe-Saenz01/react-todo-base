import { TodoProgress } from "../TodoProgress";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import './App.css';
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

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
                {loading && 
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                }
                {error && <TodosError />}
                {(!loading && todosFiltered.length === 0) && <TodosEmpty />}
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