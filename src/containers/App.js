import { connect } from 'react-redux';
import App from '../App';

export default connect(
    state => ({         
}),
    dispatch => ({ 
        getCurrentDate: () => {
            dispatch({type: 'GET_CURRENT_DATE'})
        },
       getGalleryFromLS: () => {
            dispatch({type: 'GET_GALLERY_FROM_LS'})
        }
})
)(App)