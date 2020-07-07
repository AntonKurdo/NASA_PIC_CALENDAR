import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import {
    getGallerySelector,
    getIsLoaderSelector
} from '../selectors/selectors';


export default connect(
    state => ({ 
        gallery: getGallerySelector(state),  
        isLoader: getIsLoaderSelector(state)
}),
    dispatch => ({   
})
)(Navbar)