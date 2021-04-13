import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

const MessengerMain: React.FunctionComponent = () => {

    const messages = ['salut', 'salut toi !'];
    const handleSend = () => {

    }

    return <div className={'messenger'}>
        <Messages messages={messages} />
        <ChatInput handleSend={handleSend} />
    </div>
}

export default MessengerMain;