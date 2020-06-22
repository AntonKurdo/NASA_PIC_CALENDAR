import { connect } from 'react-redux';
import Navbar from '../components/Navbar'

export default connect(
    state => ({ 
        gallery: state.gallery,  
        isLoader: state.isLoader
}),
    dispatch => ({   
})
)(Navbar)