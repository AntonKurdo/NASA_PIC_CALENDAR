import { createSelector } from 'reselect';


//  NAVBAR

const getGallery = (state) => {    
    return state.gallery;
}
export const getGallerySelector = createSelector(getGallery, (gallery) => {    
    return gallery;
})


const getIsLoader = (state) => {
    return state.isLoader
}
export const getIsLoaderSelector = createSelector(getIsLoader, (isLoader) => {
    return isLoader;
})


//  GALLERY

const getGalleryPics = (state) => {
    return state.gallery;
}
export const getGalleryPicsSelector = createSelector(getGalleryPics, (gallery) => {
    return gallery;
})


// CALENDAR

const getCurrentDate = (state) => {
    return state.currentDate;
}
export const getCurrentDateSelector = createSelector(getCurrentDate, (date) => {
    return date;
})


const getCurrentImg = (state) => {
    return state.currentImg;
}
export const getCurrentImgSelector = createSelector(getCurrentImg, (currentImg) => {
    return currentImg;
})


const getCurrentPicTitle = (state) => {
    return state.currentPicTitle;
}
export const getCurrentPicTitleSelector = createSelector(getCurrentPicTitle, (currentPicTitle) => {
    return currentPicTitle;
})


const getCurrentPicExplanation = (state) => {
    return state.currentPicExplanation;
}
export const getCurrentPicExplanationSelector = createSelector(getCurrentPicExplanation, (currentPicExplanation) => {
    return currentPicExplanation;
})


const getCurrentPicDate = (state) => {
    return state.currentPicDate;
}
export const getCurrentPicDateSelector = createSelector(getCurrentPicDate, (currentPicDate) => {
    return currentPicDate;
})


const getIsAlertOpen = (state) => {
    return state.isAlertOpen;
}
export const getIsAlertOpenSelector = createSelector(getIsAlertOpen, (isAlertOpen) => {
    return isAlertOpen;
})


const getIsAlertFutureOpen = (state) => {
    return state.isAlertFutureOpen;
}
export const getIsAlertFutureOpenSelector = createSelector(getIsAlertFutureOpen, (isAlertFutureOpen) => {
    return isAlertFutureOpen;
})