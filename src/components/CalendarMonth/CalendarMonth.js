import React, { Component } from 'react';

import MonthDay from '../MonthDay/MonthDay';

import './calendarmonth.css';


class CalendarMonth extends Component {

    state = {
        firstDay: '',
        daysInMonth: '',
        todayInMonth: 'false',
        today: ''
    }

    componentDidMount() {
        this.calculateMonth();
        this.isTodayInMonth();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            this.calculateMonth();
            this.isTodayInMonth();
        }
    }

    calculateMonth() {
        const year = this.props.date.getFullYear();
        const month = this.props.date.getMonth();
        const weekDayOfFirstDayOfMonth = new Date(year + "-" + (month+1) + "-01").getDay();
        const daysInMonthCalc = new Date(year, month+1, 0).getDate();
        this.setState({firstDay: weekDayOfFirstDayOfMonth, daysInMonth: daysInMonthCalc});
    }

    isTodayInMonth() {
        const year = this.props.date.getFullYear();
        const month = this.props.date.getMonth();

        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth();
        if (year === thisYear && month === thisMonth) {
            this.setState({todayInMonth: true, today: today.getDate()});
        } else {
            this.setState({todayInMonth: false})
        }
    }

    render() {

        const days = [];


        days.push(<MonthDay key={1} firstDay={true} day={this.state.firstDay} keyDay={1} today={this.state.todayInMonth & this.state.today === 1? true : false}/>)
        for (let i = 2; i<=this.state.daysInMonth; i++) {
            if (this.state.todayInMonth && this.state.today === i) {
                days.push(<MonthDay key={i} firstDay={false} keyDay={i} today={true}/>)
            } else {
                days.push(<MonthDay key={i} firstDay={false} keyDay={i} today={false}/>)
            }
            
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
                        {days}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CalendarMonth;