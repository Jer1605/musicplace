import React from 'react';
import RoundedImage from "../../common/RoundedImage";
import Card from "../../common/Card";
import '../../../scss/components/card.scss';

const ClassItem : React.FunctionComponent = () => {
    return (
        <div className={'card'}>
            <Card link={'Class'}>
                <div className={'mosaic'} data-valign={'center'}>
                    <div className={'mosaic-item'}>
                        <RoundedImage image={'https://lh3.googleusercontent.com/proxy/i9o9JTS1beFuKjZ7YVTusaodVr_PNUmbEn5oMfdAQJkw3SLLk8ygaKZp9OUlSZgEK578xIHynRvOk1rHJKQbBC474eyWj2ToKaWHaL3gP10woJgcTXR4WuYMbhwv15ZYssATtsRuFQ'} />
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

export default ClassItem;