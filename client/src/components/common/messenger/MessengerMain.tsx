import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import ScrollArea from 'react-scrollbar';
import Contact from "./Contact";
import {ReactComponent} from "*.svg";

type MessengerMainProps = {
    hidden: boolean;
}

const MessengerMain: React.FunctionComponent<MessengerMainProps> = ({hidden}: MessengerMainProps) => {

    const messages = ['salut', 'salut toi !'];
    const handleSend = () => {

    }

    return <React.Fragment>
        <ScrollArea>
            <div className={'messenger-sessions'}>

                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />

            </div>
        </ScrollArea>
        <div className={'messenger-chat'}>
            <div style={{flex: 'none'}}>
                <h1 className={'mb-0'}>Mensajes</h1>
                <p>Kamastar</p>
            </div>
            <div className={'messenger-content'}>
                <ScrollArea>
                    <Messages messages={messages} />
                </ScrollArea>
            </div>
            <ChatInput handleSend={handleSend} />
        </div>
    </React.Fragment>
}

export default MessengerMain;