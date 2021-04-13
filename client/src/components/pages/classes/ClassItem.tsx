import React from 'react';
import RoundedImage from "../../common/RoundedImage";
import Card from "../../common/Card";
import '../../../scss/components/card.scss';

type ClassItemProps = {
    preview?: boolean,
}

const ClassItem : React.FunctionComponent<ClassItemProps> = ({preview}: ClassItemProps) => {
    return  <div className={'list-item'}>
        <Card link={'class'}>
            <div className={'mosaic'} data-space={2}>
                <div className={'mosaic-item'} data-size={!preview ? 15 : ''}>
                    <RoundedImage image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} />
                </div>
                <div className={'mosaic-item'} data-size={!preview ? 30 : ''} data-amplitud={preview ? 'grow' : ''}>
                    <p className={'mb-0'}><strong>Titre</strong></p>
                    <p><small className={'grey'}>Description</small></p>
                </div>
                {!preview ? <div className={'mosaic-item list-description'} data-amplitud={'grow'}>
                    <small className={'grey'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio...
                    </small>
                </div> : null}
                <div className={'mosaic-item text-right'} data-size={!preview ? 20 : ''}>
                    <p className={'mb-0'}><small>01.04.2021</small></p>
                    <p><small>Madrid</small></p>
                </div>
            </div>
        </Card>
    </div>
}

export default ClassItem;