import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

import '../../../scss/components/messenger.scss';

const MessengerNotLogged: React.FunctionComponent = () => {

    const history = useHistory();
    const loginRedirect = () =>  {history.push('/login')}

    return <div className={'messenger messenger-login'}>
        <div className={'text-center'}>
            <button onClick={loginRedirect}><FontAwesomeIcon className={'mr-1'} icon={['fas', 'lock']} /> Enviar un mensaje</button>
        </div>
    </div>
}

export default MessengerNotLogged;