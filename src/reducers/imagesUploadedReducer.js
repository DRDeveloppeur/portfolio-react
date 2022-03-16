import ActionsType from "../Action/action.enum";

let stateInit = {
    images: []
}

const imagesUploadedReducer = (state = stateInit, action = {}) => {
    let images = [];

    switch (action.type) {
        case ActionsType.LOAD_IMAGES:
            images = action.images;
            return {images};
        default:
            return state;
    }
}

export default imagesUploadedReducer;