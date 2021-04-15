import React from "react";
import Messenger from "../../common/messenger/Messenger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Class: React.FunctionComponent = () => {

    return <div className={'detail class-detail'}>
        <section className={'section container'}>
            <div className={'breadcrumbs grey mb-5'}>Cursos / curso_id</div>
            <h1>Title of the announce</h1>
            <div className={'mosaic'} data-space={5}>
                <div className={'mosaic-item'} data-size={35}>
                    <img className={'mb-5'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} />
                </div>
                <div className={'mosaic-item'} data-amplitud={'grow'}>
                    <div className={'rate'}>
                        <FontAwesomeIcon icon={['fas', 'star']} style={{color: "#ffdf01"}} />
                        <FontAwesomeIcon icon={['fas', 'star']} style={{color: "#ffdf01"}} />
                        <FontAwesomeIcon icon={['fas', 'star']} style={{color: "#ffdf01"}} />
                        <FontAwesomeIcon icon={['fas', 'star']} style={{color: "#ffdf01"}} />
                        <FontAwesomeIcon icon={['fas', 'star-half']} style={{color: "#ffdf01"}} />
                    </div>
                    <div className={'price mt-3'}><strong>Precio:</strong> 30€ / 45mn</div>
                    <div className={'detail-data mt-3'}>
                        <p className={'detail-date'}><strong>14.04.2021</strong> - Madrid - Cours de guitare</p>
                        <p className={'detail-styles'}>Pop, Jazz, Groove</p>
                        <p className={'description'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio...
                        </p>
                        <div className={'class-actions'}>
                            <button className={'mt-3 mr-2'}><FontAwesomeIcon icon={['fas', 'comment']} /> Contactar</button>
                            <button className={'mt-3'}><FontAwesomeIcon icon={['fas', 'star']} /> Dejar una aviso</button>
                        </div>
                    </div>
                </div>
            </div>
            <Messenger />
        </section>
    </div>
}

export default Class;