import React from "react";

type ChatInputProps = {
    handleSend: () => void;
}

const ChatInput: React.FunctionComponent<ChatInputProps> = ({handleSend}: ChatInputProps) => {
    return <div className={'messenger'}>
        <div className={'messenger-input'}>

        </div>
    </div>
}

export default ChatInput;