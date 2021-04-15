import React from "react";

type MessageProps = {
    guest?: boolean,
    content: string,
}

const Message: React.FunctionComponent<MessageProps> = ({guest, content}: MessageProps) => {
    return <React.Fragment>
        <div className={`messenger-message-date ${!guest ? 'text-right' : ''} grey-light`}><small>16.06.2021 - 15h00</small></div>
        <div className={`mosaic`}>
            <div className={`mosaic-item  messenger-message${guest ? ' messenger-message-guest' : ''}`} data-dock={guest ? 'left' : 'right'}>
                {content}
            </div>
            <div className={'mosaic-item'} data-amplitud={'grow'} />
        </div>
    </React.Fragment>
}

export default Message;