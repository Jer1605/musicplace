import React from 'react';
import ShowForm from "../dashboard/forms/ShowForm";

type ShowPostProps = {
    [x:string]: any,
}

const ShowPost : React.FunctionComponent<ShowPostProps> = ({...props}: ShowPostProps) => {
    console.log('props', props)
    return (
        <section className={'section list-item'}>
            <div className={'container'}>
                <ShowForm {...props} />
            </div>
        </section>
    )
}

export default ShowPost;