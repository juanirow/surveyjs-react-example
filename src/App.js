import React, { Component } from 'react';
import config from './survey-config.js';
import * as Survey from 'survey-react';
import './App.css';

Survey.StylesManager.applyTheme("default");

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveyData: {}
        };
    }

    render() {
        return (
            <div className="App">
              <h1>App Component</h1>

              <Survey.Survey
                json={config}
                onComplete={this.onComplete}
              />
            </div>
        );
    }

    onComplete = (survey, options) => {
        console.log(`[App.js] onComplete:: survey: ${JSON.stringify(survey.data)} \n options: ${JSON.stringify(options)}`);
    }
}

export default App;
