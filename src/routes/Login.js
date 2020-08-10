import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner/Banner';
import Error from '../components/Error/Error';
import Profile from './Profile';

import { postData } from '../API/general';

import './login.css';

class LogIn extends Component {
    
    state = {
        username: '',
        password: '',
        isError: false,
        error: '',
        loggedIn: false
    };

    handleUsernameChange = this.handleUsernameChange.bind(this);
    handlePasswordChange = this.handlePasswordChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
    
        const result = await postData('/users/login', this.state);

        if (result.token) {
            sessionStorage.setItem('jwtToken', result.token);
            this.setState({ isError: false, error: '', loggedIn: true });            
        } else {
            const errorInput = [{
                field: "Username and password",
                error: "Username or password incorrect"
            }];
            this.setState({ isError: true,  error: errorInput });
        }
    }

    render() {
        // meiri lógík til að athuga hvort user er í cookies? eða session?

        if (this.state.loggedIn) {
            return (
                <Profile />
            )
        } else {
            return (
                <React.Fragment>
                    <Banner />
                    <section className="container">
                        <form className="signin-container" onSubmit={this.handleSubmit}>
                            <label className="username-container">Username</label>
                            <input className="input-box" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                            <label className="password-container">Password</label>
                            <input className="input-box" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                            <input className="button" type="submit" value="Submit" />
                        </form>
                        <p className="register-here">Don't have an account? Register <Link className="a" to="/register">here</Link></p>
                        {this.state.isError? <Error errorArray={this.state.error} withField={false}/> : null}
                    </section>
                </React.Fragment>       
            );
        }
    }
}

export default LogIn;