
import { GET_ALBUM, FILTER_ALBUM } from '../actions/widget'

export function album(state = {}, action) {
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

export function filter(state = null, action) {
    switch(action.type) {
        case FILTER_ALBUM:
            return action.filter
        default:
            return state;
    }
}