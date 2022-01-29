import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../scss/pages/detail.scss';

const Musician: React.FunctionComponent = () => {

    return <div className={'detail musician-detail'}>


        <section className={'section container'}>
            <div className={'breadcrumbs grey'}><small>Musicos / musicos_id</small></div>
            <div className={'mosaic mb-1'} data-valign={'center'}>
                <div className={'mosaic-item'}><span className={'label'}>PRO</span></div>
                <div className={'mosaic-item'}><h1 className={'mb-0'}>Title of the announce</h1></div>
                <div className={'mosaic-item detail-like'} data-dock={'right'}>
                    <FontAwesomeIcon icon={['far', 'star']} />
                    <FontAwesomeIcon className={'ml-05'}  icon={['far', 'heart']} />
                </div>
            </div>
            <div className={'mosaic'} data-space={4}>
                <div className={'mosaic-item'} data-size={35}>
                    <img src={'https://www.eventosbarcelona.com/wp-content/uploads/musicband2.jpg'} />
                </div>
                <div className={'mosaic-item'} data-size={65}>
                    <div className={'detail-data'}>
                        <p className={'detail-date mb-0'}><strong>14.04.2021</strong> - Madrid - Chanteur/Chanteuse cherche Batteur</p>
                        <p className={'detail-styles'}><small>Pop, Jazz, Groove, Reggae, World, Electro</small></p>
                        <p className={'description mt-3 mb-3'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <button className={'mr-05'}><FontAwesomeIcon className={'mr-05'} icon={['fas', 'comment']} /> Contactar</button>
                        <button><FontAwesomeIcon className={'mr-05'} icon={['fas', 'plus']} /> Publicar un anuncio</button>
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Musician;