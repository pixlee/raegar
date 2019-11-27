
export const SHOW_LIGHTBOX = 'SHOW_LIGHTBOX'

function showLightbox(lightbox) {
    return {
        type: SHOW_LIGHTBOX,
        lightbox
    }
}

export function handleShowLightbox(lightbox) {
    return showLightbox(lightbox)
}