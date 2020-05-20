import React, { Component } from 'react';
import config from './survey-config.js';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import './App.css';

Survey.StylesManager.applyTheme("bootstrap");

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false
        };
        this.onComplete = this.onComplete.bind(this);
    }

    onComplete = (survey, options) => {
        console.log(`[App.js] onComplete:: survey: ${JSON.stringify(survey.data)} \n options: ${JSON.stringify(options)}`);
        this.setState({
            isCompleted: true
        });
    }


    render() {
        const survey = !this.state.isCompleted ? (
            <Survey.Survey
              json={config}
              onComplete={this.onComplete}
              showCompletePage={false}
            /> ) : (
                <h1>Survey Completed</h1>
            );


        return (
            <div className="App">
              {survey}
            </div>
        );
    }

}

export default App;
