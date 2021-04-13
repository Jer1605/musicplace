import React from "react";
import ShowsSearch from "./ShowsSearch";
import ShowsList from "./ShowsList";

const Shows : React.FunctionComponent = () => {
    return <section className={'shows'}>
        <section className={`intro intro-small bg-8`}>
            <h1 className={'absolute-centered text-center intro-title'}>Sal de casa y ven a un concierto !</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <h1>Conciertos</h1>
                <ShowsSearch />
                <ShowsList pagination={true} itemPerPage={10} />
            </div>
        </section>
    </section>
}

export default Shows;