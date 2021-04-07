import React from 'react';
import MusicianItem from "./MusicianItem";

type MusiciansProps = {
    length?: number,
    columns?: number,
}

const Musicians : React.FunctionComponent<MusiciansProps> = ({length, columns} : MusiciansProps) => {
    return (
        <div className={'musicians'}>
            <h1>Musicos y Bandas</h1>
            <section className={`grid grid-cols-${columns || 1} gap-10`}>
                <MusicianItem />
                <MusicianItem />
                <MusicianItem />
            </section>
        </div>
    )
}

export default Musicians;