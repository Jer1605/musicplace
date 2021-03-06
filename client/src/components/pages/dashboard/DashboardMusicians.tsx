import React from "react";
import DashboardMenu from "./DashboardMenu";
import MusiciansList from "../musicians/MusiciansList";


const DashboardMusicians: React.FunctionComponent = () => {
    return <section className={'dashboard'}>
        <section className={`intro intro-small bg-yawil`}>
            <h1 className={'absolute-centered text-center intro-title'}>Dashboard</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <DashboardMenu />
                <h2>Mis anuncios</h2>
                <MusiciansList edit={true} />
            </div>
        </section>
    </section>
}

export default DashboardMusicians;