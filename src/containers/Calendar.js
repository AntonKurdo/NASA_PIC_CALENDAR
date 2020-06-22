import { connect } from 'react-redux';
import Calendar from '../components/Calendar'

export default connect(
    state => ({
    currentDate: state.currentDate,
        currentImg: state.currentImg,
        currentPicTitle: state.currentPicTitle,
        currentPicExplanation: state.currentPicExplanation,
        currentPicDate: state.currentPicDate,
        isAlertOpen: state.isAlertOpen,
        isAlertFutureOpen: state.isAlertFutureOpen
}),
dispatch => ({  
    sendData: (date) => {
        dispatch({type: 'SEND_REQUEST', payload: date})
    },
    setCurrentDate: (date) => {
        dispatch({type: 'SET_CURRENT_DATE', payload: date})
    },  
    onSendPicToGal: (url, title, date) => {
        dispatch({type: 'SEND_PIC_TO_GAL', payload: {url: url, title: title, date: date}})       
        dispatch({ type: 'SET_GALLERY_TO_LS'})       
    }, 
    loaderActive: () => {
        dispatch({ type: 'START_LOADER'})
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
})
)(Calendar)