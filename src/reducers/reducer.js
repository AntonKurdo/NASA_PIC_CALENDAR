import update from 'immutability-helper';

const INITIAL_STATE = {
    currentImg: '',
    currentDate: new Date(),
    currentPicTitle: '',
    currentPicExplanation: '',
    currentPicDate: '',
    gallery: [], 
    isLoader: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'GET_DATA': 
            return update(state, {
                currentImg: { $set: action.payload.url },
                currentPicTitle: { $set: action.payload.title },
                currentPicExplanation: { $set: action.payload.explanation },
                currentPicDate: { $set: action.payload.date }                
            });
        case 'SET_CURRENT_DATE': 
            return update(state, {
                currentDate: { $set: action.payload }
            });
        case 'SET_GALLERY_FROM_LS': 
            return update(state, {
                gallery: {$set: action.payload}
            })
        case 'SEND_PIC_TO_GAL':
            return update(state, {
                gallery: { $push: [{ picId: new Date(), picUrl: action.payload.url, picTitle: action.payload.title, picDate: action.payload.date}] }
            });
        case 'REMOVE_PIC_FROM_GAL': 
            return update(state, {
                gallery: {$set: state.gallery.filter(el => el.picTitle !== action.payload)}
            })
        case 'START_LOADER':
            return update(state, {
                isLoader: {$set: true}
            })
        case 'STOP_LOADER':
            return update(state, {
                isLoader: {$set: false}
            })
        
        default: return state;

    }    
}