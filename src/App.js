import React, { Component } from 'react';
import config from './survey-config.js';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import './App.css';

Survey.StylesManager.applyTheme("bootstrap");

class App extends Component {

    constructor(props) {
        super(props);
        this.id = window.location.pathname.substring(1);
        console.log(`[App.js] contructor:: id: ${this.id}`);
        this.state = {
            isCompleted: false
        };
        this.onComplete = this.onComplete.bind(this);
        this.onCurrentPageChanged = this.onCurrentPageChanged.bind(this);
        this.onValidateQuestion = this.onValidateQuestion.bind(this);
    }

    /**
     * The event is fired after a user clicks the 'Complete' button and finishes a survey. Use this event to send the survey data to your web server.
     * sender - the survey object that fires the event.
     * options.showDataSaving(text) - call this method to show that the survey is saving survey data on your server. The text is an optional parameter to show a custom message instead of default.
     * options.showDataSavingError(text) - call this method to show that an error occurred while saving the data on your server. If you want to show a custom error, use an optional text parameter.
     * options.showDataSavingSuccess(text) - call this method to show that the data was successfully saved on the server.
     * options.showDataSavingClear - call this method to hide the text about the saving progress.
     */
    onComplete = (survey, options) => {
        console.log(`[App.js] onComplete:: survey: ${JSON.stringify(survey.data)} \n options: ${JSON.stringify(options)}`);
        this.setState({
            isCompleted: true
        });
    }

    /**
     * The event is fired when the current page has been changed to another page.
     * Typically it happens when a user click on 'Next' or 'Prev' buttons.
     * sender - the survey object that fires the event.
     * option.oldCurrentPage - a previous current/active page.
     * option.newCurrentPage - a new current/active page.
     * option.isNextPage - commonly means, that end-user press the next page button. In general,
     *                     it means that options.newCurrentPage is the next page after options.oldCurrentPage
     * option.isPrevPage - commonly means, that end-user press the previous page button.
     *                     In general, it means that options.newCurrentPage is the previous page before options.oldCurrentPage
     */
    onCurrentPageChanged = (survey, options) =>  {
        console.log(`[App.js] onCurrentPageChanged:: survey: ${JSON.stringify(survey)} \n options: ${JSON.stringify(options)}`);
    }

    /**
     * Validate a question
     * The event is fired on validating value in a question. You can specify a custom error message using options.error.
     * The survey blocks completing the survey or going to the next page when the error messages are displayed.
     * sender - the survey object that fires the event.
     * options.question - a validated question.
     * options.name - a question name.
     * options.value - the current question value (answer).
     * options.error - an error string. It is empty by default.
     */
    onValidateQuestion = (survey, options) => {
        console.log(`[App.js] onValidateQuestion:: options: ${JSON.stringify(options)}`);
    }


    render() {
        const survey = !this.state.isCompleted ? (
            <Survey.Survey
              json={config}
              onComplete={this.onComplete}
              onCurrentPageChanged={this.onCurrentPageChanged}
              onValidateQuestion={this.onValidateQuestion}
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
