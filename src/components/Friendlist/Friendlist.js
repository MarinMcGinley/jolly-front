import React, { Component } from 'react';

import './friendlist.css';
import { getData } from '../../API/general';
import { Router } from 'react-router-dom';

class Friendlist extends Component {

    state = {
        friends: []
    }

    async componentDidMount() {
        const token = sessionStorage.getItem('jwtToken')
        if (!token) {
            Router.push('/');
        }
        const allFriends = await getData('/users/me/friends', token);

        console.log('allFriends');
        console.log(allFriends);

        this.setState({ friends: allFriends });
    }

    componentWillUnmount() {
        // HVAÐ KEMUR HÉR????

    }



    render () {
        return (
            <React.Fragment>
                <div className="friendlist">
                    {this.state.friends.map((item, itemKey) =>
                        <div className="friend" key={item.username}>
                            <img className="profile-picture" src={item.image} alt={item.name} />
                            <p className="name">{item.name}</p>
                        </div>
                    )}
                </div>
            </React.Fragment>
            
        )
    }
}

export default Friendlist;