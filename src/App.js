import React, { Component } from 'react';
import MySurvey from './MySurvey.js';


class App extends Component {

    constructor(props) {
        super(props);
        this.id = window.location.pathname.substring(1);
        console.log(`[App.js] contructor:: id: ${this.id}`);
    }

    render() {

        return (
            <div className="container-fluid">
              <div className="row justify-content-lg-center">
                <div className="col col-lg-10">
                  <MySurvey/>
                </div>
              </div>
            </div>
        );
    }

}

export default App;
