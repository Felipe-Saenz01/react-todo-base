import './TodoFilter.css'

function TodoFilter({filter, setFilter}) {

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <input className="TodoFilter" value={filter} placeholder="Filtro TODO" onChange={handleFilter} />
    )
}

export { TodoFilter };