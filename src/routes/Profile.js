import React, { Component } from 'react';

import Friendlist from '../components/Friendlist/Friendlist';
import Banner from '../components/Banner/Banner';
import Calendar from '../components/Calendar/Calendar';

import './profile.css'

class Profile extends Component {


    render() {
        return (
            <React.Fragment>
                <Banner />
                <div className="main-container">
                    <Friendlist addFriend={true} />
                    <Calendar />
                    
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;