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
            <div className="container-fluid">
              <div className="row justify-content-lg-center">
                <div className="col col-lg-10">
                  <div className="card border border-primary mt-5">
                    <div className="card-body">
                      <h5 className="card-title justify-content-center text-primary">Survey</h5>
                      <h6 className="card-subtitle text-muted text-primary">Company Name</h6>
                      <div className="App">
                        {survey}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }

}

export default App;
