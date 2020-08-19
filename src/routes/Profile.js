import React, { Component } from 'react';

import Friendlist from '../components/Friendlist/Friendlist';
import Banner from '../components/Banner/Banner';

import './profile.css'

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <div className="main-container">
                    <Friendlist addFriend={true} />
                    <div className="calendar-container">
                        <a href='/add-event'>Add event</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;