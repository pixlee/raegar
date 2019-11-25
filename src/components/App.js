
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css'
import PublishLightbox from './PublishLightbox'

function App() {
    return (
        <Router>
            <div className="app">
                <Route path='/' exact component={PublishLightbox} />
            </div>
        </Router>
    );
}

export default App;
