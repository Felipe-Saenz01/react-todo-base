import './TodoProgress.css'

function TodoProgress({current, total}){
    let text
    if (total >= 1 && current === total) {
        text = "FELICIDADES!!! ningun TODO pendiente"
    }else{
        text = "Has completado "+current+" de "+total+" TODOS"
    }

    return(
        <h1 className="TodoProgress"><span>{text}</span></h1>
    )
}

export { TodoProgress };