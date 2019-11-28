
export const SHOW_LIGHTBOX = 'SHOW_LIGHTBOX'
export const HIDE_LIGHTBOX = 'HIDE_LIGHTBOX'
export const UPDATE_LIGHTBOX = 'UPDATE_LIGHTBOX'

function showLightbox(lightbox) {
    return {
        type: SHOW_LIGHTBOX,
        lightbox
    }
}

export function handleShowLightbox(lightbox) {
    return showLightbox(lightbox)
}

function hideLightbox(lightbox) {
    return {
        type: HIDE_LIGHTBOX,
        lightbox
    }
}

export function handleHideLightbox(lightbox) {
    return hideLightbox(lightbox)
}

function updateLightbox(lightbox) {
    return {
        type: UPDATE_LIGHTBOX,
        lightbox
    }
}

export function handleUpdateLightbox(lightbox) {
    return updateLightbox(lightbox)
}