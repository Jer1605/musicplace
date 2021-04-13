import React from "react";
import List from "../../common/List";
import ClassItem from "./ClassItem";

type ClassesProps = {
    title?: string,
    itemPerPage?: number,
    pagination?: boolean,
    columns?: number,
    preview?: boolean,
}

const ClassesList : React.FunctionComponent<ClassesProps> = ({title, itemPerPage, columns, preview, pagination} : ClassesProps) => {
    return(
        <div className={'classes'}>
            {title ? <h1>{title}</h1> : null}
            <List className={'musicians-list'} itemPerPage={itemPerPage} columns={columns} pagination={pagination}>
                <ClassItem preview={preview}/>
                <ClassItem preview={preview}/>
                <ClassItem preview={preview}/>
            </List>
        </div>
    )
}

export default ClassesList;