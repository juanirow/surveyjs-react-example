import React, { Component } from 'react';

class NotFound extends Component {

    render() {
        return (
            <div className="card border border-danger mt-5">
              <div className="card-body">
                <h5 className="card-title justify-content-center text-danger">
                  Survey not Found
                </h5>
                <h6 className="card-subtitle text-muted text-primary">
                  Verify the link id of the survey
                </h6>
              </div>
            </div>
        );
    }
};

export default NotFound;
