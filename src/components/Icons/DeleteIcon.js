import {TodoIcons} from "./TodoIcons"

function DeleteIcon ({onDelete}) {
    return (
        <TodoIcons type="delete" color="gray" onClick={onDelete} />
    )
}

export { DeleteIcon }