import React from "react";
import MessengerNotLogged from './MessengerNotLogged';

import '../../../scss/components/messenger.scss';
import MessengerMain from "./MessengerMain";

const Messenger: React.FunctionComponent = () => {
    const logged = true;
    const hidden = true;

    return logged ? <MessengerMain hidden={hidden} /> : <MessengerNotLogged hidden={hidden} />;
}

export default Messenger;