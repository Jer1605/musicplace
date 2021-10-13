import React from "react";
import MessengerNotLogged from './MessengerNotLogged';

import '../../../scss/components/messenger.scss';
import MessengerMain from "./MessengerMain";
import Closer from "../Closer";

const Messenger: React.FunctionComponent = () => {
    const logged = true;
    const [hidden, setHidden] = React.useState(false);

    return <div className={'messenger'} aria-hidden={hidden}>
        <Closer callback={() => {setHidden(true)}} />
        {logged ? <MessengerMain hidden={hidden} /> : <MessengerNotLogged hidden={hidden} />}
    </div>;
}

export default Messenger;