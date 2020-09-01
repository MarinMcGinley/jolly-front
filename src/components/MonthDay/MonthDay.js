import React, { Component } from 'react';

import './monthday.css';

class Monthday extends React.Component {
    render() {

        if (this.props.firstDay) {
            return (
                <div className={`month-day-container first-day day-${this.props.day}`}>
                    <p className={`day-number-text ${this.props.today ? 'today' : null}`}>{this.props.keyDay}</p>
                </div>
            );
        } else {
            return (
                <div className="month-day-container">
                    <p className={`day-number-text ${this.props.today ? 'today' : null}`}>{this.props.keyDay}</p>
                </div>
            );
        }
    }
}

export default Monthday;