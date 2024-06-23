import { TodoProgress } from "../TodoProgress";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import './App.css';
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";


function AppUI() {

    const {
        loading,
        error,
        todosFiltered,
        checkTodo,
        deleteTodo,
        openModal
    } = useContext(TodoContext)

    return (
        <>
            <TodoProgress />
            <TodoFilter />
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

            {openModal && (
                <Modal>
                    <p>Using ReactPortal</p>
                </Modal>
            )}
        </>
    )
}

export { AppUI }