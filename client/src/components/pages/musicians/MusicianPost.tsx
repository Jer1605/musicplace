import React from 'react';
import MusicianForm from "../dashboard/forms/MusicianForm";


const MusicianPost : React.FunctionComponent = () => {
    return (
        <section className={'section list-item'}>
            <div className={'container'}>
                <MusicianForm />
            </div>
        </section>
    )
}

export default MusicianPost;