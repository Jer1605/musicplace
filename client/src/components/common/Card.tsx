import React, {MouseEventHandler} from "react";
import { useHistory } from "react-router-dom";

type CardProps = {
    link?: string,
    color?: 'purple' | 'green',
    children: JSX.Element[] | JSX.Element,
}

const Card : React.FunctionComponent<CardProps> = ({link, color, children}: CardProps) => {
    const history = useHistory();

    const redirect = (e: React.MouseEvent) : void => {
        e.preventDefault();
        if(link) history.push(link);
    }

    return (
        <div className={`card${link ? ' overable' : ''}${color ? ` bar-${color}` : ''}`} onClick={redirect}>
            {children}
        </div>
    )
}

export default Card;