import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Musician: React.FunctionComponent = () => {

    return <div className={'detail musician-detail'}>
        <section className={`intro intro-small bg-1`}>
            <h1 className={'absolute-centered text-center intro-title'}>Encuentra otros musicos en tu zona</h1>
        </section>

        <section className={'section container'}>
            <div className={'breadcrumbs grey'}>Musicos / musicos_id</div>
            <div className={'mosaic mb-2'} data-valign={'center'}>
                <div className={'mosaic-item'}><span className={'label'}>PRO</span></div>
                <div className={'mosaicèitem'}><h1 className={'mb-0'}>Title of the announce</h1></div>
            </div>
            <div className={'mosaic'} data-space={2}>
                <div className={'mosaic-item'} data-size={40}>
                    <img src={'https://www.eventosbarcelona.com/wp-content/uploads/musicband2.jpg'} />
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <div className={'detail-data'}>
                        <p className={'detail-date'}><strong>14.04.2021</strong> - Madrid - Chanteur/Chanteuse cherche Batteur</p>
                        <p className={'detail-styles'}>Pop, Jazz, Groove, Reggae, World, Electro</p>
                        <p className={'description'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <button className={'mt-1'}><FontAwesomeIcon icon={['fas', 'comment']} /> Contactar</button>
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Musician;