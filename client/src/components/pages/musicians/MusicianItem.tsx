import React from 'react';
import RoundedImage from "../../common/RoundedImage";

import '../../../scss/components/card.scss';

const MusicianItem : React.FunctionComponent = () => {
    return (
        <div className={'card'}>
            <div className={'mosaic'} data-valign={'center'}>
                <div className={'mosaic-item'}>
                    <RoundedImage image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} />
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <p className={'mb-0'}><strong>Titre</strong></p>
                    <p><small>Style1, Style2, Style3</small></p>
                </div>
                <div className={'mosaic-item'}>
                    <p><small>Madrid</small></p>
                </div>
            </div>
        </div>
    )
}

export default MusicianItem;