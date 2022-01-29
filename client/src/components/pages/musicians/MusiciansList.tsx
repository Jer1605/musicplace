import React from 'react';
import MusicianItem from "./MusicianItem";
import List from "../../common/List";

type MusiciansProps = {
    title?: string,
    itemPerPage?: number,
    pagination?: boolean,
    columns?: number,
    preview?: boolean,
    edit?: boolean,
    className?: string,
    items?: [],
}

const MusiciansList : React.FunctionComponent<MusiciansProps> = ({title, itemPerPage, columns, preview, pagination, edit, className} : MusiciansProps) => {

    return (
        <div className={`musicians-preview${className ? ` ${className}` : ''}`}>
            {title ? <h1>{title}</h1> : null}
            <List className={'musicians-list'} itemPerPage={itemPerPage} columns={columns} pagination={pagination}>
                <MusicianItem preview={preview} edit={edit}/>
                <MusicianItem preview={preview} edit={edit}/>
                <MusicianItem preview={preview} edit={edit}/>
            </List>
        </div>
    )
}

export default MusiciansList;