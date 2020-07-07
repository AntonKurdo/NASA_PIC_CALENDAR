import {connect} from 'react-redux';
import Calendar from '../components/Calendar'
import {
    getCurrentDateSelector,
    getCurrentImgSelector,
    getCurrentPicTitleSelector,
    getCurrentPicExplanationSelector,
    getCurrentPicDateSelector,
    getIsAlertOpenSelector,
    getIsAlertFutureOpenSelector
} from '../selectors/selectors';

export default connect(state => ({
    currentDate: getCurrentDateSelector(state),
    currentImg: getCurrentImgSelector(state),
    currentPicTitle: getCurrentPicTitleSelector(state),
    currentPicExplanation: getCurrentPicExplanationSelector(state),
    currentPicDate: getCurrentPicDateSelector(state),
    isAlertOpen: getIsAlertOpenSelector(state),
    isAlertFutureOpen: getIsAlertFutureOpenSelector(state)
}), dispatch => ({
    sendData: (date) => {
        dispatch({type: 'SEND_REQUEST', payload: date})
    },
    setCurrentDate: (date) => {
        dispatch({type: 'SET_CURRENT_DATE', payload: date})
    },
    onSendPicToGal: (url, title, date) => {
        dispatch({
            type: 'SEND_PIC_TO_GAL',
            payload: {
                url: url,
                title: title,
                date: date
            }
        })
        dispatch({type: 'SET_GALLERY_TO_LS'})
    },
    loaderActive: () => {
        dispatch({type: 'START_LOADER'})
    },
    onCloseAlert: () => {
        dispatch({type: 'ALERT_YOUTUBE_CLOSE'})
    },
    onOpenAlertFuture: () => {
        dispatch({type: 'ALERT_FUTURE_OPEN'})
    },
    onCloseAlertFuture: () => {
        dispatch({type: 'ALERT_FUTURE_CLOSE'})
    }
}))(Calendar)