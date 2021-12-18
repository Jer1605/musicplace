import React from "react";
import MusiciansSearch from "./MusiciansSearch";
import MusiciansList from "./MusiciansList";
import '../../../scss/pages/page_list.scss';

const Musicians : React.FunctionComponent = () => {
    return <section className={'musicians'}>
        <section className={`intro intro-small bg-1`}>
            <h1 className={'absolute-centered text-center intro-title'}>Musicos y bandas</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <MusiciansSearch />
                <MusiciansList pagination={true} itemPerPage={10} />
            </div>
        </section>
    </section>
}

export default Musicians;