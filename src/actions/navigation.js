
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION'

export function setcurrentSection(section) {
    return {
        type: SET_CURRENT_SECTION,
        section
    }
}

export function handleSetcurrentSection(section) {
    return setcurrentSection(section)
}