import React from 'react';
import RoundedImage from "../../common/RoundedImage";
import Card from "../../common/Card";
import '../../../scss/components/card.scss';

const OfferItem : React.FunctionComponent = () => {
    return (
        <div className={'card'}>
            <Card link={'Offer'}>
                <div className={'mosaic'} data-space={2}>
                    <div className={'mosaic-item'}>
                        <RoundedImage image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1cTCoNV_S0wukTyPFw8ggswPX3LprZzu2A&usqp=CAU'} />
                    </div>
                    <div className={'mosaic-item'} data-amplitud={'grow'}>
                        <p className={'mb-0'}><strong>Titre</strong></p>
                        <p><small>Offer description...</small></p>
                    </div>
                    <div className={'mosaic-item'}>
                        <p><small>Madrid</small></p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default OfferItem;