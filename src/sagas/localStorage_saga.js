import {takeEvery, select,  put} from 'redux-saga/effects';

function workerSaveToLocalStorageData({ payload: date }) {       
     localStorage.setItem('NASA_date', date);           
}

function* workerGetDataFromLocalStorage() {   
    const date = localStorage.getItem('NASA_date');
    if (date) {
        yield put({ type: 'SET_CURRENT_DATE', payload: new Date(date)});
        yield put({ type: 'SEND_REQUEST', payload: new Date(date)});
    } else {
        yield put({ type: 'SET_CURRENT_DATE', payload: new Date()});
        yield put({ type: 'SEND_REQUEST', payload: new Date()});
    }
}


function* workerSaveToLocalStorageGallery() {    
    const data = yield select(state => state.gallery)
    localStorage.setItem('NASA_gallery', JSON.stringify(data));    
}

function* workerGetGalleryFromLocalStorage() {   
    const data = localStorage.getItem('NASA_gallery');
    if (data) {
       yield put({type: "SET_GALLERY_FROM_LS", payload: JSON.parse(data)})
    }
}

export function* watchSaveToLocalStorageData() {
    yield takeEvery('SET_CURRENT_DATE', workerSaveToLocalStorageData)
}
export function* watchGetDataFromLocalStorage() {
    yield takeEvery('GET_CURRENT_DATE', workerGetDataFromLocalStorage)
}

export function* watchSaveToLocalStorageGallary() {
    yield takeEvery('SET_GALLERY_TO_LS', workerSaveToLocalStorageGallery)
}
export function* watchGetGalleryFromLocalStorage() {
    yield takeEvery('GET_GALLERY_FROM_LS', workerGetGalleryFromLocalStorage)
}