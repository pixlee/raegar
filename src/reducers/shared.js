
import { SET_CURRENT_SECTION } from '../actions/shared'

export default function currentSection(state = null, action) {
    switch(action.type) {
        case SET_CURRENT_SECTION:
            let currentSection = 'Display Info'

            switch(action.section) {
                case 'customize-widget':
                    currentSection = 'Customize Widget'
                    break
                case 'design-editor':
                    currentSection = 'Design Editor'
                    break
                case 'display-settings':
                    currentSection = 'Display Settings'
                    break
                case 'advanced-options':
                    currentSection = 'Advanced Options'
                    break
                default:
                    currentSection = 'Display Info'
                    break
            }

            return currentSection
        default:
            return state;
    }
}