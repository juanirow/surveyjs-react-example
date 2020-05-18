import React, { Component } from 'react';
import config from './survey-config.js';
import * as Survey from 'survey-react';
import './App.css';

Survey.Survey.cssType = "bootstrap";

class App extends Component {

    render() {
        return (
            <div className="App">
              <h1>App Component</h1>

              <Survey.Survey
                json={config}
              />
            </div>
        );
    }
}

export default App;
