import { useContext } from 'react'
import './TodoFilter.css'
import { TodoContext } from '../../context/TodoContext'

function TodoFilter() {

    const {filter, setFilter} = useContext(TodoContext)

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <input className="TodoFilter" value={filter} placeholder="Filtro TODO" onChange={handleFilter} />
    )
}

export { TodoFilter };