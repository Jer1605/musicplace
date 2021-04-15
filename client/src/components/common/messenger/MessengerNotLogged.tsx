import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

import '../../../scss/components/messenger.scss';

type MessengerNotLoggedProps = {
    hidden: boolean;
}

const MessengerNotLogged: React.FunctionComponent<MessengerNotLoggedProps> = ({hidden}: MessengerNotLoggedProps) => {

    const history = useHistory();
    const loginRedirect = () =>  {history.push('/login')}

    return <div className={'messenger messenger-login'} aria-hidden={hidden}>
        <h1>Mensajes</h1>
        <div className={'text-center absolute-centered'}>
            <button onClick={loginRedirect}><FontAwesomeIcon className={'mr-1'} icon={['fas', 'lock']} /> Enviar un mensaje</button>
        </div>
    </div>
}

export default MessengerNotLogged;