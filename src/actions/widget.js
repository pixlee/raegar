
export const GET_ALBUM = 'GET_ALBUM'
export const FILTER_ALBUM = 'FILTER_ALBUM'

export function getAlbum(album) {
    return {
        type: GET_ALBUM,
        album
    }
}

export function handleGetAlbum(album) {
    return getAlbum(album)
}

export function filterAlbum(filter) {
    return {
        type: FILTER_ALBUM,
        filter
    }
}

export function handleFilterAlbum(filter) {
    return filterAlbum(filter)
}