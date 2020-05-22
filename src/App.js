import React, { Component } from 'react';
import MySurvey from './MySurvey.js';
import NotFound from './NotFound.js';


class App extends Component {

    constructor(props) {
        super(props);
        this.id = window.location.pathname.substring(1);
        console.log(`[App.js] contructor:: id: ${this.id}`);
        if (this.id !== "") {
            this.fetchData(this.id);
        }
    }

    fetchData(id) {
        fetch(`http://localhost:3001/${id}`)
            .then( res => res.ok && res.json())
            .then( data => {
                console.log(`[App.js] fetchData id: ${id} data: ${data}`);
            })
            .catch(e => {
                console.error(`[App.js] fetchData:: e: ${JSON.stringify(e)}`);
            });
    }

    render() {

        const page = this.id === "" ? <NotFound/> : <MySurvey/>;

        return (
            <div className="container-fluid">
              <div className="row justify-content-lg-center">
                <div className="col col-lg-10">
                  {page}
                </div>
              </div>
            </div>
        );
    }

}

export default App;
