
import { SHOW_LIGHTBOX, HIDE_LIGHTBOX, UPDATE_LIGHTBOX } from '../actions/lightbox'

export function lightbox(state = {}, action) {
    switch(action.type) {
        case SHOW_LIGHTBOX:
            let defaultLightbox = {
                display: true,
                info_placement: 'right',
                show_user_avatar: true,
                show_social_icons: true,
                captions: 'short',
                products_layout: 'carousel',
            }
            return action.lightbox ? action.lightbox : defaultLightbox
        case HIDE_LIGHTBOX:
            return null
        case UPDATE_LIGHTBOX:
            return {
                ...action.lightbox
            }
        default:
            return state;
    }
}