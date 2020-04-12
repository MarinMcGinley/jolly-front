import React, { Component } from 'react';

import Banner from '../components/Banner/Banner';

import './login.css';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    
    render() {
        return (
            <React.Fragment>
                <Banner />
                <section className="container">
                    <form className="signin-container" onSubmit={this.handleSubmit}>
                        <label className="email-container">
                            Email
                            <input className="input-box" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </label>
                        <label className="password-container">
                            Password
                            <input className="input-box" type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                        </label>
                        <input className="button" type="submit" value="Submit" />
                    </form>
                    <p className="register-here">Don't have an account? Register here</p>
                </section>
                
            </React.Fragment>
        );
    }
}

export default LogIn;