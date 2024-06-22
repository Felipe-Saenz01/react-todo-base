import './TodoItem.css'

function TodoItems({content, completed, check, pop }) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={check} >V</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{content}</p>
            <span className="Icon Icon-delete" onClick={pop}>X</span>
        </li>
    );
}

export { TodoItems }