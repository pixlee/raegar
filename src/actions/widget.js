
export const GET_ALBUM = 'GET_ALBUM'
export const FILTER_ALBUM = 'FILTER_ALBUM'
export const CHANGE_DISPLAY_LAYOUT = 'CHANGE_DISPLAY_LAYOUT'
export const CHANGE_PREVIEW_DEVICE = 'CHANGE_PREVIEW_DEVICE'

function getAlbum(album) {
    return {
        type: GET_ALBUM,
        album
    }
}

export function handleGetAlbum(album) {
    return getAlbum(album)
}

function filterAlbum(filter) {
    return {
        type: FILTER_ALBUM,
        filter
    }
}

export function handleFilterAlbum(filter) {
    return filterAlbum(filter)
}

function changeDisplayLayout(layout) {
    return {
        type: CHANGE_DISPLAY_LAYOUT,
        layout
    }
}

export function handleChangeDisplayLayout(layout) {
    return changeDisplayLayout(layout)
}

function changePreviewDevice(device) {
    return {
        type: CHANGE_PREVIEW_DEVICE,
        previewDevice: device
    }
}

export function handleChangePreviewDevice(device) {
    return changePreviewDevice(device)
}