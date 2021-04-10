import React from 'react';
import ShowItem from "./ShowItem";

type ShowsProps = {
    length?: number,
    columns?: number,
}

const ShowsList : React.FunctionComponent<ShowsProps> = ({length, columns} : ShowsProps) => {
    return (
        <div className={'musicians'}>
            <h1>Shows</h1>
            <section className={`grid grid-cols-${columns || 1} gap-10`}>
                <ShowItem />
                <ShowItem />
                <ShowItem />
            </section>
        </div>
    )
}

export default ShowsList;