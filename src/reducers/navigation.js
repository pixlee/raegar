
import { SET_CURRENT_LINK } from '../actions/navigation'

export default function navigation(state = {}, action) {
    switch(action.type) {
        case SET_CURRENT_LINK:
            return {
                ...state,
                ...action.link
            }
        default:
            return state;
    }
}