import { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    
    const [loading, setLoading] = useState(true)
    
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            try {
                // Busca el localStorage llamado React-todo, si no existe devuelve un array vacio
                const localStorageItem = localStorage.getItem(itemName)
                let parseItem
        
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parseItem = initialValue
                }else{
                    parseItem = JSON.parse(localStorageItem)
                    setItem(parseItem)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000)
    })

    const saveTodos = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {item, saveTodos, loading, error}
}

export {useLocalStorage}