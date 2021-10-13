import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type CloserProps = {
    callback: () => void;
}

const Closer: React.FunctionComponent<CloserProps> = ({callback}: CloserProps) => {
    return <span onClick={callback} className={'closer'}><FontAwesomeIcon icon={['fas', 'times']} /></span>;
}

export default Closer;