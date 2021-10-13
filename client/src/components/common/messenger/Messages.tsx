import React from "react";
import Message from "./Message";

type MessagesProps = {
    messages: Array<string>;
}

const Messages: React.FunctionComponent<MessagesProps> = ({messages}: MessagesProps) => {
    return <div className={'messenger-messages'}>
                <Message content={'Salut !'} guest={true} />
                <Message content={'Oh ! Ca roule ?'} />
                <Message content={'tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?tu deviens quoi ?'} />
                <Message content={'tranquille'} guest={true}/>
                <Message content={'tranquiaaaaaaaaalle'} guest={true}/>
                <Message content={'tranqddddddddduille'} guest={true}/>
                <Message content={'tranqusdille'} guest={true}/>
                <Message content={'tranquille'} guest={true}/>
                <Message content={'tranffffffffffffsquille'} guest={true}/>
                <Message content={'tranquille'} guest={true}/>
                <Message content={'traqsdnquille'} guest={true}/>
                <Message content={'tranquille'} guest={true}/>
                <Message content={'tranquqsdille'} guest={true}/>
                <Message content={'tranquille1'} guest={true}/>
                <Message content={'tranquille last'} guest={true}/>
            </div>
}

export default Messages;