import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import "./style.css";

const InputImage = ({name,  required = false}) => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        console.log(images);
    };
    

    return (
        <div className="input-image">
            <ReactImageUploading name={name} multiple value={images} inputProps={() => name} required={required} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button className="block-draggable" style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
                        Click or Drop here
                    </button>

                    <Box sx={{ overflowY: 'auto', margin: "15px" }}>
                        <ImageListItem key="Subheader" cols={2} style={{width: "100%", paddingBottom: "15px"}}>
                            <ListSubheader component="div" width="100%">Images</ListSubheader>
                        </ImageListItem>

                        <ImageList variant="masonry" cols={2} gap={15}>
                            {imageList.map((image, index) => (
                                <ImageListItem key={index} className="item-card" variant="masonry">
                                    <FontAwesomeIcon icon="fas fa-times" className="remove" onClick={() => onImageRemove(index)} />

                                    <img src={image.data_url} srcSet={image.data_url} alt={image.file.name} loading="lazy" />

                                    <ImageListItemBar title={image.file.name} subtitle={image.file.type} actionIcon={
                                            <FontAwesomeIcon icon="fas fa-exchange-alt" className="change" onClick={() => onImageUpdate(index)} />
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                    <button className="remove-all btn" onClick={onImageRemoveAll}>Remove all images</button>
                </div>
                )}
            </ReactImageUploading>
        </div>
    );
}

export default InputImage;