import React from "react";
import List from "../../common/List";
import ShowItem from "./ShowItem";

type ShowsProps = {
    title?: string,
    itemPerPage?: number,
    pagination?: boolean,
    columns?: number,
    preview?: boolean,
}

const ShowsList : React.FunctionComponent<ShowsProps> = ({title, itemPerPage, columns, preview, pagination} : ShowsProps) => {
    return(
        <div className={'Shows'}>
            {title ? <h1>{title}</h1> : null}
            <List className={'show-list'} itemPerPage={itemPerPage} columns={columns} pagination={pagination}>
                <ShowItem preview={preview}/>
                <ShowItem preview={preview}/>
                <ShowItem preview={preview}/>
            </List>
        </div>
    )
}

export default ShowsList;