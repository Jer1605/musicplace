import React from "react";
type RoundedImageProps = {
    image: string,
}

const RoundedImage : React.FunctionComponent<RoundedImageProps> = ({image} : RoundedImageProps) => {
    return <span className={'rounded'} style={{backgroundImage: `url(${image})`}} />
}

export default RoundedImage;