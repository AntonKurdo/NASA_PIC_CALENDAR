import {takeEvery, put, call} from 'redux-saga/effects';

function * workerRequestToBase({payload: date}) {

    const year = date.getFullYear();
    const mounth = ((date.getMonth() + 1).toString()).length === 1
        ? '0' + (date.getMonth() + 1)
        : (date.getMonth() + 1)
    const day = date
        .getDate()
        .toString()
        .length === 1
        ? '0' + date.getDate()
        : date.getDate();
    let fullDate = `${year}-${mounth}-${day}`;
    let URL = `https://api.nasa.gov/planetary/apod?api_key=zpKx82ygfdep8Q6abpJX8DQJyKOns6ztJh3LeaAy&date=${fullDate}`;
    let isError = false;
    function fetchData() {
        return fetch(URL).then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                isError = true;
            }
        }).then(res => {
            return res
        })
    }

    const data = yield call(fetchData);

    if (!isError) {
        if (!data.url.includes('youtube')) {
            yield put({type: 'GET_DATA', payload: data})
        } else {
            yield put({
                type: 'ALERT_YOUTUBE_OPEN', payload: {
                    text: 'Sorry, there is no picture on this date, but you can watch the video of the day on the ',
                    url: data.url
                }
            })              
        }
    }

    yield put({type: 'STOP_LOADER'})
}

export function * watchRequestToBase() {
    yield takeEvery('SEND_REQUEST', workerRequestToBase)
}