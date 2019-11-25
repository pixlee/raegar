
export const SET_CURRENT_LINK = 'SET_CURRENT_LINK'

export function setCurrentLink(link) {
    return {
        type: SET_CURRENT_LINK,
        link
    }
}

export function handleSetCurrentLink(link) {
    return setCurrentLink(link)
}