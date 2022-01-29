import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ImageUploading, { ImageListType } from "react-images-uploading";

import '../../scss/components/image_uploader.scss';

const ImageUploader : React.FunctionComponent = () =>
{
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {!imageList || !imageList.length ? <button className={'iu-dropzone mr-1'} style={isDragging ? { color: "red" } : undefined} onClick={(e) => {e.preventDefault();onImageUpload();}} {...dragProps}>
                            <FontAwesomeIcon icon={['far', 'images']} />
                        </button> : null}

                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={(e) => {e.preventDefault();onImageUpdate(index)}}>Update</button>
                                    <button onClick={(e) => {e.preventDefault();onImageRemove(index)}}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default ImageUploader;