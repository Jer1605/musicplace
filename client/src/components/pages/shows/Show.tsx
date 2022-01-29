import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Show: React.FunctionComponent = () => {

    return <div className={'detail show-detail'}>
        <section className={'section container'}>
            <div className={'breadcrumbs grey'}><small>Conciertos / concierto_id</small></div>
            <div className={'mosaic mb-1'}>
                <div className={'mosaic-item'}><h1 className={'mb-0'}>Title of the announce</h1></div>
                <div className={'mosaic-item detail-like'} data-dock={'right'}>
                    <FontAwesomeIcon icon={['far', 'star']} />
                    <FontAwesomeIcon className={'ml-05'}  icon={['far', 'heart']} />
                </div>
            </div>
            <div className={'mosaic'} data-space={4}>
                <div className={'mosaic-item'} data-size={35}>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} width={'100%'} />
                </div>
                <div className={'mosaic-item'} data-size={65}>
                    <div className={'detail-data'}>
                        <p className={'detail-date mb-0'}><strong>14.04.2021</strong> - Madrid - 21h30 - 20€</p>
                        <p><small><FontAwesomeIcon className={'mr-05'} icon={['fas', 'map-marker-alt']} /> EL JUNCO JAZZ CLUB | Pop, Jazz, Groove</small></p>
                        <p className={'description mt-3 mb-3'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <p></p>
                    </div>
                    <div className={'class-actions'}>
                        <button className={'mr-05'}><FontAwesomeIcon className={'mr-05'} icon={['fas', 'plus']} /> Publicar un anuncio</button>
                        <button className={'mr-15'}><FontAwesomeIcon className={'mr-05'} icon={['fas', 'music']} /> Voy a este concierto</button>
                        <FontAwesomeIcon icon={['fas', 'users']} /> 145 personas
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Show;