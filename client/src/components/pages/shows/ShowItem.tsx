import React from 'react';
import RoundedImage from "../../common/RoundedImage";
import Card from "../../common/Card";
import '../../../scss/components/card.scss';

const ShowItem : React.FunctionComponent = () => {
    return (
        <div className={'card'}>
            <Card link={'Show'}>
                <div className={'mosaic'} data-valign={'center'}>
                    <div className={'mosaic-item'}>
                        <RoundedImage image={'https://media.timeout.com/images/105310261/image.jpg'} />
                    </div>
                    <div className={'mosaic-item'} data-amplitud={'grow'}>
                        <p className={'mb-0'}><strong>Titre</strong></p>
                        <p><small>Style1, Style2, Style3</small></p>
                    </div>
                    <div className={'mosaic-item'}>
                        <p><small>Madrid</small></p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ShowItem;