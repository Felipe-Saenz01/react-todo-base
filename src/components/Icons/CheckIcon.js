import { TodoIcons } from './TodoIcons.js'

function CheckIcon ({completed, onCheck}) {
    return (
        <TodoIcons type="check" color={completed ? 'green' : 'gray' }  onClick={onCheck}/>
    )
}

export { CheckIcon }