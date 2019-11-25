
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css'
import DisplayInfo from './DisplayInfo'
import CustomizeWidget from './CustomizeWidget'
import DesignEditor from './DesignEditor'
import DisplaySettings from './DisplaySettings'
import AdvancedOptions from './AdvancedOptions'

function App() {
    return (
        <Router>
            <div className="publish_lightbox">
                <Route path='/' exact component={DisplayInfo} />
                <Route path='/display-info' exact component={DisplayInfo} />
                <Route path='/customize-widget' exact component={CustomizeWidget} />
                <Route path='/design-editor' exact component={DesignEditor} />
                <Route path='/display-settings' exact component={DisplaySettings} />
                <Route path='/advanced-options' exact component={AdvancedOptions} />
            </div>
        </Router>
    );
}

export default App;
