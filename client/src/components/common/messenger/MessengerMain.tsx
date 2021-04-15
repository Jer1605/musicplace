import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import ScrollArea from 'react-scrollbar';

type MessengerMainProps = {
    hidden: boolean;
}

const MessengerMain: React.FunctionComponent<MessengerMainProps> = ({hidden}: MessengerMainProps) => {

    const messages = ['salut', 'salut toi !'];
    const handleSend = () => {

    }

    return <div className={'messenger'} aria-hidden={hidden}>
        <h1>Mensajes</h1>
        <ScrollArea>
            { () => <Messages messages={messages} /> }
        </ScrollArea>
        <ChatInput handleSend={handleSend} />
    </div>
}

export default MessengerMain;