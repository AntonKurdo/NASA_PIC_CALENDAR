import { connect } from 'react-redux';
import Gallery from '../components/Gallery'
import { getGalleryPicsSelector } from '../selectors/selectors';

export default connect(
    state => ({   
        galleryPics: getGalleryPicsSelector(state)
}),
    dispatch => ({   
        onRemovePic: (title) => {
            dispatch({ type: 'REMOVE_PIC_FROM_GAL', payload: title })
            dispatch({ type: 'SET_GALLERY_TO_LS' })  
        }
})
)(Gallery)