import React from "react";

type ChatInputProps = {
    handleSend: () => void;
}

const ChatInput: React.FunctionComponent<ChatInputProps> = ({handleSend}: ChatInputProps) => {
    return <div className={'messenger-input'}>
        <div className={'mosaic'}>
            <div className={'mosaic-item'} data-size={75}><textarea className={'bg-grey-light w-100'} name={'message'} /></div>
            <div className={'mosaic-item'} data-size={25}><button className={'w-100'}>Enviar</button></div>
        </div>
    </div>
}

export default ChatInput;