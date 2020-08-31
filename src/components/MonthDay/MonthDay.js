import React, { Component } from 'react';

import './monthday.css';

class Monthday extends React.Component {
    render() {

        if (this.props.firstDay) {
            return (
                <div className={`month-day-container first-day day-${this.props.day}`}>
                    {this.props.keyDay}
                </div>
            );
        } else {
            return (
                <div className="month-day-container">
                    {this.props.keyDay}
                </div>
            );
        }
    }
}

export default Monthday;