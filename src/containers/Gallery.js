import { connect } from 'react-redux';
import Gallery from '../components/Gallery'

export default connect(
    state => ({   
        galleryPics: state.gallery
}),
    dispatch => ({   
        onRemovePic: (title) => {
            dispatch({ type: 'REMOVE_PIC_FROM_GAL', payload: title })
            dispatch({ type: 'SET_GALLERY_TO_LS' })  
        }
})
)(Gallery)