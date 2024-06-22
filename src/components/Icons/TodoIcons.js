import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './Icons.css'

function TodoIcons({type, color, onClick}){

    const iconTypes = {
        "check" : (color) => <CheckSVG className="Icon-svg" fill={color}/>,
        "delete" : (color) => <DeleteSVG className="Icon-svg" fill={color}/>
    }

    return(
        <span 
            className={`Icon Icon-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcons }