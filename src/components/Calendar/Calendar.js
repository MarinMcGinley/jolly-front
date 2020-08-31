import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getData } from '../../API/general';

import CalendarMonth from '../CalendarMonth/CalendarMonth';
import CalendarWeek from '../CalendarWeek/CalendarWeek';
import CalendarDay from '../CalendarDay/CalendarDay';

import './calendar.css';

class Calendar extends Component {
    state = {
        dateperiod: 'Month',
        date: '',
        realDate: ''
    }

    handleDatePeriodChange = this.handleDatePeriodChange.bind(this);
    handlePrevMonthChange = this.handlePrevMonthChange.bind(this);
    handleNextMonthChange = this.handleNextMonthChange.bind(this);

    componentDidMount() {
        this.calculateDate();

    }

    calculateDate() {
        const date = new Date();
        const options = { month: 'long' };
        this.setState({date: date.getFullYear() + ' ' + new Intl.DateTimeFormat('en-US', options).format(date),
                        realDate: date});
    }

    renderCalendar() {
        switch(this.state.dateperiod) {
            case 'Month':
                return <CalendarMonth 
                    date={this.state.realDate}
                />;
            case 'Week':
                return <CalendarWeek />;
            case 'Day':
                return <CalendarDay />;
            default:
                return <p>Something is wrong</p>

        }
    }

    handleDatePeriodChange(event) {
        event.preventDefault();
        this.setState({dateperiod: event.target.value});
    }

    handlePrevMonthChange(event) {
        event.preventDefault();
        let newDate = '';
        if (this.state.realDate.getMonth() == 0) {
            newDate = new Date((this.state.realDate.getFullYear()-1) + "-12-01");
        } else {
            newDate = new Date(this.state.realDate.getFullYear() + "-" + (this.state.realDate.getMonth()) + "-01");
        }
        const options = { month: 'long' };
        this.setState({realDate: newDate, date: newDate.getFullYear() + ' ' + new Intl.DateTimeFormat('en-US', options).format(newDate)});       
    }

    handleNextMonthChange(event) {
        event.preventDefault();
        let newDate = '';
        if (this.state.realDate.getMonth() == 11) {
            newDate = new Date((this.state.realDate.getFullYear()+1) + "-01-01");
        } else {
            newDate = new Date(this.state.realDate.getFullYear() + "-" + (this.state.realDate.getMonth()+2) + "-01");
        }
        const options = { month: 'long' };
        this.setState({realDate: newDate, date: newDate.getFullYear() + ' ' + new Intl.DateTimeFormat('en-US', options).format(newDate)});       
    
    }

    render() {
        return (
            <React.Fragment>
                <div className="calendar-container">
                    <div className="control-container">
                        <div className="back-next-buttons">
                            <button className="back-button" onClick={this.handlePrevMonthChange}>&lt;</button>
                            <button className="next-button" onClick={this.handleNextMonthChange}>&gt;</button>
                        </div>

                        <h2 className="date">{this.state.date}</h2>
                        <select className="date-type" onChange={this.handleDatePeriodChange}>
                            <option value="Month">MONTH</option>
                            <option value="Week">WEEK</option>
                            <option value="Day">DAY</option>
                        </select>
                    </div>
                    {this.state.realDate? this.renderCalendar(): null}
                    <a href='/add-event'>Add event</a>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Calendar;