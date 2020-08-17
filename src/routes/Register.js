import React, { Component } from 'react';

import Banner from '../components/Banner/Banner';
import Error from '../components/Error/Error';

import { postData } from '../API/general';

import './register.css';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password1: '',
            password2: '',
            isError: false,
            error: [],
            withErrorField: false,
            sussessfullRegister: false
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

    async handleSubmit(event) {
        event.preventDefault();

        let errorInput = [];

        if (this.state.password1 !== this.state.password2) {
            errorInput.push({
                field: "Password",
                error: "Passwords must be equal"
            });
            this.setState({isError: true, error: errorInput, withErrorField: false});
        } else {
            const userData = {
                name: this.state.name,
                username: this.state.username,
                password: this.state.password1
            };

            const result = await postData('/users/register', userData);

            if (result.image) {
                this.setState({successfullRegister: true, isError: false});
            } else {
                this.setState({isError: true, error: result.errors, withErrorField: true});
            }
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Banner />
                <section className="container">
                    <form className="register-container" onSubmit={this.handleSubmit}>
                        <label className="name-container">Name</label>
                        <input className="input-box" type="text" value={this.state.name} onChange={this.handleNameChange} disabled={this.state.successfullRegister ? "disabled" : null} />
                        
                        <label className="username-container">Username</label>
                        <input className="input-box" type="text" value={this.state.username} onChange={this.handleUsernameChange} disabled={this.state.successfullRegister ? "disabled" : null} />
                        
                        <label className="password-container">Password</label>
                        <input className="input-box" type="password" value={this.state.password1} onChange={this.handlePassword1Change} disabled={this.state.successfullRegister ? "disabled" : null} />
                        
                        <label className="password-container">Please enter password again</label>
                        <input className="input-box" type="password" value={this.state.password2} onChange={this.handlePassword2Change} disabled={this.state.successfullRegister ? "disabled" : null} />
                        
                        <input className="button" type="submit" value="Register" />
                    </form>
                    {this.state.successfullRegister ? <p className="login-here">You have successfully created an account. Log in <a className="a" href="/">here</a></p> : null}
                </section>
                {this.state.isError? <Error errorArray={this.state.error} withField={this.state.withErrorField} /> : null}    
            </React.Fragment>
        ); 
    }
}

export default Register;