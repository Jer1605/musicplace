import React from "react";

type MessagesProps = {
    messages: Array<string>;
}

const Messages: React.FunctionComponent<MessagesProps> = ({messages}: MessagesProps) => {
    return <div className={'messenger'}>
        <div className={'messenger-messages'}>

        </div>
    </div>
}

export default Messages;