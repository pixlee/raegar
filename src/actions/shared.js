
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION'
export const LOADING = 'LOADING'

function setCurrentSection(section) {
    return {
        type: SET_CURRENT_SECTION,
        section
    }
}

export function handleSetCurrentSection(section) {
    return setCurrentSection(section)
}

function setLoading(loading) {
    return {
        type: LOADING,
        loading
    }
}

export function handleSetLoading(loading) {
    return setLoading(loading)
}