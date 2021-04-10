import React from 'react';
import MusicianItem from "./MusicianItem";

type MusiciansProps = {
    title?: string,
    length?: number,
    columns?: number,
    preview?: boolean,
}

const MusiciansList : React.FunctionComponent<MusiciansProps> = ({title, length, columns, preview} : MusiciansProps) => {
    return (
        <div className={'musiciansList'}>
            {title ? <h1>{title}</h1> : null}
            <section className={`grid grid-cols-${columns || 1} gap-20 list`}>
                <MusicianItem preview={preview}/>
                <MusicianItem preview={preview}/>
                <MusicianItem preview={preview}/>
            </section>
        </div>
    )
}

export default MusiciansList;