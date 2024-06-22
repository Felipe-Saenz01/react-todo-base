import './TodoProgress.css'

function TodoProgress({current, total}){
    return(
        <h1 className="TodoProgress">Has completado {current} de {total} TODO</h1>
    )
}

export { TodoProgress };