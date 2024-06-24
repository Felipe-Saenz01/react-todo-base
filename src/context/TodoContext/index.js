import { createContext } from "react";
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react'

const TodoContext = createContext()

function TodoProvider({ children }) {
    // estado para los TODOS
    const { item: todos, saveTodos: setTodos, loading, error } = useLocalStorage('React-Todo', []);

    //Estados para el modal
    const [openModal, setOpenModal] = useState(false)

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
    const addTodo = (text) => {
        const newTodos = [...todos]
        if (newTodos.length >= 1) {
            const todoIndex = (newTodos.length - 1)
            const newIndex = (newTodos[todoIndex].id + 1)
            newTodos.push({
                id: newIndex,
                text: text,
                completed: false
            })
        }else{
            newTodos.push({
                id: 0,
                text: text,
                completed: false
            })
        }
        setTodos(newTodos)
    }

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
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                filter,
                setFilter,
                todosFiltered,
                checkTodo,
                deleteTodo,
                openModal, 
                setOpenModal,
                addTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };