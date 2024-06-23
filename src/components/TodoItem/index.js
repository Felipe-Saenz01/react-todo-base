import './TodoItem.css'
import { CheckIcon } from '../Icons/CheckIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

function TodoItems({content, completed, check, pop }) {
    return (
        <li className="TodoItem">
            <CheckIcon  completed={completed} onCheck={check}  />
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{content}</p>
            <DeleteIcon onDelete={pop} />
        </li>
    );
}

export { TodoItems }