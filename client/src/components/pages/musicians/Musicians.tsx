import React from "react";
import MusiciansSearch from "./MusiciansSearch";
import MusiciansList from "./MusiciansList";

const Musicians : React.FunctionComponent = () => {
    return <section className={'musicians'}>
        <section className={`intro intro-small bg-1`}>
            <h1 className={'absolute-centered text-center intro-title'}>Encuentra otros musicos en tu zona</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <h1>Musicos y bandas</h1>
                <MusiciansSearch />
                <MusiciansList />
            </div>
        </section>
    </section>
}

export default Musicians;