
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION'
export const FETCHING_DATA = 'FETCHING_DATA'

function setCurrentSection(section) {
    return {
        type: SET_CURRENT_SECTION,
        section
    }
}

export function handleSetCurrentSection(section) {
    return setCurrentSection(section)
}

function setFetchingData(fetching) {
    return {
        type: FETCHING_DATA,
        fetching
    }
}

export function handleSetFetchingData(fetching) {
    return setFetchingData(fetching)
}