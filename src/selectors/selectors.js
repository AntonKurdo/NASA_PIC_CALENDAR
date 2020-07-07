//  NAVBAR

export const getGallerySelector = (state) => {
    return state.gallery;
}
export const getIsLoaderSelector = (state) => {
    return state.isLoader
}

//  GALLERY

export const getGalleryPicsSelector = (state) => {
    return state.gallery;
}

// CALENDAR

export const getCurrentDateSelector = (state) => {
    return state.currentDate;
}
export const getCurrentImgSelector = (state) => {
    return state.currentImg;
}
export const getCurrentPicTitleSelector = (state) => {
    return state.currentPicTitle;
}
export const getCurrentPicExplanationSelector = (state) => {
    return state.currentPicExplanation;
}
export const getCurrentPicDateSelector = (state) => {
    return state.currentPicDate;
}
export const getIsAlertOpenSelector = (state) => {
    return state.isAlertOpen;
}
export const getIsAlertFutureOpenSelector = (state) => {
    return state.isAlertFutureOpen;
}