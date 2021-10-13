import React from "react";
import RoundedImage from "../RoundedImage";
import Closer from "../Closer";

const Contact: React.FunctionComponent = () => {
    return <div className={'messenger-contact mb-2'}>
        <Closer callback={() => {console.log('close')}} />
        <span className={'connected'} data-connected={'true'}/>
        <RoundedImage image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqL5qthMzUhxj8OXgxtB5JyqvYFnwKsakOw&usqp=CAU'} />
    </div>;
}

export default Contact;