import './TodoItem.css'

function TodoItems({ content, completed }) {
    return (
        <li className="TodoItem">
            <spam className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</spam>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{content}</p>
            <spam className="Icon Icon-delete">X</spam>
        </li>
    );
}

export { TodoItems }