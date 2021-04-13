import React from "react";
import MessengerNotLogged from './MessengerNotLogged';

import '../../../scss/components/messenger.scss';
import MessengerMain from "./MessengerMain";

const Messenger: React.FunctionComponent = () => {
    const logged = true;

    return logged ? <MessengerMain /> : <MessengerNotLogged />;
}

export default Messenger;