import { useState } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(() => {
        // Busca el localStorage llamado React-todo, si no existe devuelve un array vacio
        return JSON.parse(localStorage.getItem(itemName)) || initialValue
    })

    const saveTodos = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return [item, saveTodos]
}

export {useLocalStorage}