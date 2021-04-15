import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import '../../../scss/pages/offer.scss';

const Offer: React.FunctionComponent = () => {

    return <div className={'detail offer-detail'}>
        <section className={'section container'}>
            <div className={'breadcrumbs grey mb-5'}>Ofertas / oferta_id</div>
            <h1>Title of the announce</h1>
            <div className={'mosaic'} data-space={5}>
                <div className={'mosaic-item'} data-size={35}>
                    <div className={'main'}><img className={'mb-2'} src={'https://www.zikinf.com/_gfx/annonces/dyn/med/ibanez-sr1205-modifiee-2364667.jpg?1538606117'} /></div>
                    <div className={'offer-thumbs mosaic'}>
                        <div className={'mosaic-item'}>
                            <img className={'offer-thumb'} src={'https://www.zikinf.com/_gfx/annonces/dyn/med/ibanez-sr1205-modifiee-2364667.jpg?1538606117'} />
                        </div>
                        <div className={'mosaic-item'}>
                            <img className={'offer-thumb'} src={'https://www.zikinf.com/_gfx/annonces/dyn/med/ibanez-sr1205-modifiee-2364667.jpg?1538606117'} />
                        </div>
                        <div className={'mosaic-item'}>
                            <img className={'offer-thumb'} src={'https://www.zikinf.com/_gfx/annonces/dyn/med/ibanez-sr1205-modifiee-2364667.jpg?1538606117'} />
                        </div>
                        <div className={'mosaic-item'}>
                            <img className={'offer-thumb'} src={'https://www.zikinf.com/_gfx/annonces/dyn/med/ibanez-sr1205-modifiee-2364667.jpg?1538606117'} />
                        </div>
                    </div>
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <div className={'price'}><strong>Precio:</strong> 3000€</div>
                    <div className={'detail-data mt-3'}>
                        <p className={'detail-date'}><strong>14.04.2021</strong> - Madrid - Vendo mi bajo</p>
                        <p className={'detail-shipping'}><FontAwesomeIcon icon={['fas', 'hand-sparkles']} /> Remise en main propre</p>
                        <p className={'description'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <button className={'mt-3'}><FontAwesomeIcon icon={['fas', 'comment']} /> Contactar</button>
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Offer;