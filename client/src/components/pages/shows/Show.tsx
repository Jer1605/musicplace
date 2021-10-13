import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Show: React.FunctionComponent = () => {

    return <div className={'detail show-detail'}>
        <section className={'section container'}>
            <div className={'breadcrumbs grey mb-5'}>Conciertos / concierto_id</div>
            <h1>Title of the announce</h1>
            <div className={'mosaic'} data-space={5}>
                <div className={'mosaic-item'} data-size={35}>
                    <img className={'mb-5'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} />
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <div className={'detail-data mt-3'}>
                        <p className={'detail-date'}><strong>Precio:</strong> 20€</p>
                        <p className={'detail-date'}><strong>14.04.2021</strong> - Madrid - 21h30</p>
                        <p><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> EL JUNCO JAZZ CLUB</p>
                        <p className={'detail-styles'}>Pop, Jazz, Groove</p>
                        <p className={'description'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <p></p>
                    </div>
                    <div className={'class-actions mt-3'}>
                        <button className={'mr-5'}><FontAwesomeIcon icon={['fas', 'kiwi-bird']} /> Voy !</button>
                        <FontAwesomeIcon icon={['fas', 'users']} /> 145 personas van a este concierto
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Show;