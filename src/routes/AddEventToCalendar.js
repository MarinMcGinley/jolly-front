import React, { Component } from 'react';

import Banner from '../components/Banner/Banner';
import Error from '../components/Error/Error';

import { postDataWithToken } from './../API/general';


import './addEventToCalendar.css'
import { Router, Redirect } from 'react-router-dom';

class AddEventToCalendar extends Component {

    state = {
        token: '',
        title: '',
        fromDate: '',
        fromTime: '',
        toDate: '',
        toTime: '',
        description: '',
        isError: false,
        errors: [],
        success: false,
    };

    handleTitleChange = this.handleTitleChange.bind(this);
    handleFromDateChange = this.handleFromDateChange.bind(this);
    handleFromTimeChange = this.handleFromTimeChange.bind(this);
    handleToDateChange = this.handleToDateChange.bind(this);
    handleToTimeChange = this.handleToTimeChange.bind(this);
    handleDescriptionChange = this.handleDescriptionChange.bind(this);
    submitEvent = this.submitEvent.bind(this);

    componentDidMount() {
        const JWToken = sessionStorage.getItem('jwtToken');
        if (!JWToken || this.state.success) {
            Router.push('/');
        }
        this.setState({token: JWToken});
    }

    handleTitleChange(event) {
        event.preventDefault();
        this.setState({title: event.target.value, success: false});
    }

    handleFromDateChange(event) {
        event.preventDefault();
        this.setState({fromDate: event.target.value, success: false});
    }

    handleFromTimeChange(event) {
        event.preventDefault();
        this.setState({fromTime: event.target.value, success: false});
    }

    handleToDateChange(event) {
        event.preventDefault();
        this.setState({toDate: event.target.value, success: false});
    }

    handleToTimeChange(event) {
        event.preventDefault();
        this.setState({toTime: event.target.value, success: false});
    }

    handleDescriptionChange(event) {
        event.preventDefault();
        this.setState({description: event.target.value, success: false});
    }

    async submitEvent(event) {
        event.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description,
            startTime: this.state.fromDate + " " + this.state.fromTime,
            endTime: this.state.toDate + " " + this.state.toTime,
        }

        const result = await postDataWithToken('/events/me/event', data, this.state.token);

        
        if (result.id) {
            this.setState({success: true, isError: false, errors: []});
        } else {
            this.setState({isError: true, errors: result});
        }

    }

    render() {
        if (this.state.success) {
            return <Redirect to='/profile' />
        } else {
            return (
                <React.Fragment>
                    <Banner />
                    <section className="add-event-container-outside">
                        <form className="add-event-container">
                            <label className="title-container">Title</label>
                            <input className="input-box" value={this.state.title} onChange={this.handleTitleChange} />

                            <div className="time-container">
                                <div className="from date-container">
                                    <div className="label-input-container-date">
                                        <label className="date">Date</label>
                                        <input className="input-box" type="date" value={this.state.fromDate} onChange={this.handleFromDateChange} />
                                    </div>
                                    <div className="label-input-container-time">
                                        <label className="time">Time</label>
                                        <input className="input-box" type="time" vale={this.state.fromTime} onChange={this.handleFromTimeChange} />
                                    </div>
                                </div>

                                <p className="to-connector">to</p>

                                <div className="to date-container">
                                    <div className="label-input-container-date">
                                        <label className="date">Date</label>
                                        <input className="input-box" type="date" value={this.state.toDate} onChange={this.handleToDateChange} />
                                    </div>

                                    <div className="label-input-container-time">
                                        <label className="time">Time</label>
                                        <input className="input-box" type="time" value={this.state.toTime} onChange={this.handleToTimeChange}/>
                                    </div>
                                </div>
                            </div>

                            <label className="description">Description</label>
                            <textarea className="description-input-box" rows="4" cols="50" value={this.state.description} onChange={this.handleDescriptionChange} />

                            <input className="button" type="submit" value="Save" onClick={this.submitEvent} />
                        </form>
                        {this.state.isError ? <Error errorArray={this.state.errors} /> : null}

                    </section>
                </React.Fragment>
            );
        }
    }
}

export default AddEventToCalendar;