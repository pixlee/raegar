
import { GET_ALBUM } from '../actions/widget'

export default function album(state = {}, action) {
    switch(action.type) {
        case GET_ALBUM:
            return {
                ...state,
                ...action.album
            }
        default:
            return state;
    }
}