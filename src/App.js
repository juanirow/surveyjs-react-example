import React, { Component } from 'react';
import config from './survey-config.js';
import * as Survey from 'survey-react';
import './App.css';

Survey.Survey.cssType = "bootstrap";

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

    onComplete({data}) {
        console.log(`[App.js] onComplete:: data: ${JSON.stringify(data)}`);
    }
}

export default App;
