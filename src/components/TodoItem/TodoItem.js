import './TodoItem.css'

function TodoItems({ content, completed }) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{content}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}

export { TodoItems }