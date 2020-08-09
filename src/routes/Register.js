import React, { Component } from 'react';

import Banner from '../components/Banner/Banner';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password1: '',
            password2: ''

        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassword1Change = this.handlePassword1Change.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
        
    }

    handlePassword1Change(event) {
        this.setState({password1: event.target.value});
    }

    handlePassword2Change(event) {
        this.setState({password2: event.target.value});
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
                    <form className="register-container" onSubmit={this.handleSubmit}>
                        <label className="name-container">Name</label>
                        <input className="input-box" type="text" value={this.state.name} onChange={this.handleNameChange} />
                        
                        <label className="username-container">Username</label>
                        <input className="input-box" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                        
                        <label className="password-container">Password</label>
                        <input className="input-box" type="text" value={this.state.password1} onChange={this.handlePassword1Change} />
                        
                        <label className="password-container">Please enter password again</label>
                        <input className="input-box" type="text" value={this.state.password2} onChange={this.handlePassword2Change} />
                        
                        <input className="button" type="submit" value="Register" />
                    </form>
                </section>
            </React.Fragment>
        ); 
    }
}

export default Register;