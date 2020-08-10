import React, { Component } from 'react';

import Friendlist from '../components/Friendlist/Friendlist';
import Banner from '../components/Banner/Banner';

import './profile.css'

class Profile extends Component {
    render() {
        return (
            <React.Fragment className="container">
                <Banner />
                <Friendlist />
            </React.Fragment>
        );
    }
}

export default Profile;