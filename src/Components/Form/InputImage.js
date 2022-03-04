import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { imagesUploaded } from "../../Action/actions";
import "./style.css";

const InputImage = ({name,  required = false}) => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const dispatch = useDispatch();
    const { imagesUpload } = useSelector(state => {
        return {
            imagesUpload: state.imagesUploadedReducer.images,
        }
    })

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        dispatch(imagesUploaded(imageList))
    };
    

    return (
        <div className="input-image">
            <ImageUploading name={name} multiple value={images} inputProps={{"name": name}} required={required} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
                }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button type="button" className="block-draggable" style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
                        {isDragging ? "Click or Drop here" : "Upload space"}
                    </button>

                    {
                        errors && <div>
                        {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                        {errors.acceptType && <span>Your selected file type is not allow</span>}
                        {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                        {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                        </div>
                    }

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

                    <button type="button" className="remove-all btn" onClick={onImageRemoveAll}>Remove all images</button>
                </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default InputImage;