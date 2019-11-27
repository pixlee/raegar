
export const SHOW_LIGHTBOX = 'SHOW_LIGHTBOX'
export const HIDE_LIGHTBOX = 'HIDE_LIGHTBOX'

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
    console.log('hehe')
    return hideLightbox(lightbox)
}