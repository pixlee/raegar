
export const GET_ALBUM = 'GET_ALBUM'

export function getAlbum(album) {
    return {
        type: GET_ALBUM,
        album
    }
}

export function handleGetAlbum(album) {
    return getAlbum(album)
}