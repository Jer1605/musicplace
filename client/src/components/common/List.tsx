import React from 'react';
import Pagination from "./Pagination";

type ListProps = {
    itemPerPage?: number,
    columns?: number,
    className?: string,
    pagination?: boolean,
    children: Array<JSX.Element>,
}

const List : React.FunctionComponent<ListProps> = ({itemPerPage, columns, className, children, pagination} : ListProps) => {

    return (
        <React.Fragment>
            <section className={`grid grid-cols-${columns || 1} gap-20 list ${className || ''}`}>
                {children || null}
            </section>
            {pagination ? <Pagination total={children.length} itemPerPage={itemPerPage} /> : null}
        </React.Fragment>
    )
}

export default List;