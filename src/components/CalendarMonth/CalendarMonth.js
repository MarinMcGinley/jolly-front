import React, { Component } from 'react';

import MonthDay from '../MonthDay/MonthDay';

import './calendarmonth.css';


class CalendarMonth extends Component {

    state = {
        firstDay: '',
        daysInMonth: ''
    }

    componentDidMount() {
        this.calculateMonth();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            this.calculateMonth();
        }
    }

    calculateMonth() {
        const year = this.props.date.getFullYear();
        const month = this.props.date.getMonth();
        const weekDayOfFirstDayOfMonth = new Date(year + "-" + (month+1) + "-01").getDay();
        const daysInMonthCalc = new Date(year, month+1, 0).getDate();
        console.log("year: " + year + " month: " + month);
        this.setState({firstDay: weekDayOfFirstDayOfMonth, daysInMonth: daysInMonthCalc});
    }

    render() {

        const days = [];

        for (let i = 2; i<=this.state.daysInMonth; i++) {
            days.push(<MonthDay firstDay={false} keyDay={i} />)
        }
        
        return (
            <React.Fragment>
                <div className="calendar-month">
                    <div className="calendar-weekdays-item">
                        <div className="day">
                            Sunday
                        </div>
                        <div className="day">
                            Monday
                        </div>
                        <div className="day">
                            Tuesday
                        </div>
                        <div className="day">
                            Wednesday
                        </div>
                        <div className="day">
                            Thursday
                        </div>
                        <div className="day">
                            Friday
                        </div>
                        <div className="day">
                            Saturday
                        </div>
                        
                    </div>
                    <div className="calendar-item">
                        <MonthDay firstDay={true} day={this.state.firstDay} keyDay={1} />
                        {days}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CalendarMonth;