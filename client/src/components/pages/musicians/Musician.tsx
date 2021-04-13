import React from "react";
import Messenger from "../../common/messenger/Messenger";

const Musician: React.FunctionComponent = () => {

    const connected = false;

    return <div className={'detail musician-detail'}>
        <section className={'section container'}>
            <div className={'breadcrumbs grey mb-5'}>Musicos / musicos_id</div>
            <h1>Title of the announce</h1>
            <div className={'mosaic'} data-space={5}>
                <div className={'mosaic-item'} data-size={35}>
                    <img className={'mb-5'} src={'https://www.eventosbarcelona.com/wp-content/uploads/musicband2.jpg'} />
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <div className={'type'}><span className={'label'}>PRO</span></div>
                    <div className={'detail-data mt-3'}>
                        <p className={'detail-date'}><strong>14.04.2021</strong> - Madrid - Chanteur/Chanteuse cherche Batteur</p>
                        <p className={'detail-styles'}>Pop, Jazz, Groove, Reggae, World, Electro</p>
                        <p className={'description'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Musician;