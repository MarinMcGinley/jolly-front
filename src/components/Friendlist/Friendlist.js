import React, { Component } from 'react';

import './friendlist.css';
import { getData, postDataWithToken } from '../../API/general';
import { Router } from 'react-router-dom';

import AddFriend from '../AddFriend/AddFriend';

class Friendlist extends Component {

    state = {
        friends: [],
        token: '',
        username: '',
        isError: false,
        error: [],
        searchEmpty: true,
        friend: '',
        friendFound: false,
        searchedFriends: []
    }

    handleFriendChoiceInParentContainer = this.handleFriendChoiceInParentContainer.bind(this);
    submitFriendChoiceInParentContainer = this.submitFriendChoiceInParentContainer.bind(this);
    handleFriendChangeInParentContainer = this.handleFriendChangeInParentContainer.bind(this);
    handleClickInParentContainer = this.handleClickInParentContainer.bind(this);

    async componentDidMount() {
        const JWToken = sessionStorage.getItem('jwtToken');
        if (!JWToken) {
            Router.push('/');
        }

        this.setState({ token: JWToken }, async () => {
            const allFriends = await getData('/users/me/friends', JWToken);
            this.setState({ friends: allFriends });
        });
    }

    componentWillUnmount() {
        // HVAÐ KEMUR HÉR????
    }

    handleFriendChoiceInParentContainer(friend) {
        this.setState({username: friend.username, searchedFriends: [], friend: friend.name, friendFound: true});
    }

    async submitFriendChoiceInParentContainer(event) {
        event.preventDefault();
        const data = {username: this.state.username};

        const result = await postDataWithToken('/users/me/friends', data, this.state.token);

        if (result.error) {
            this.setState({isError: true, error: [{ error: result.error }]});
        } else {
            const allFriends = await getData('/users/me/friends', this.state.token);
            this.setState({isError: false, searchEmpty: true, friend: '', friends: allFriends});
        }
    }

    async handleFriendChangeInParentContainer(event) {
        event.preventDefault();
        this.setState({friend: event.target.value, friendFound: false, error: '', isError: false}, async () => {
            if (this.state.friend !== '') {
                const result = await getData(`/users?search=${this.state.friend}`, this.state.token);
                this.setState({searchedFriends: result.items});
            } else {
                this.setState({searchedFriends: []});
            }
        });
    }

    async handleClickInParentContainer(event) {
        event.preventDefault();
        this.setState({searchEmpty: false, isError: false});
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
                    <AddFriend 
                        friend={this.state.friend}
                        friendFound={this.state.friendFound}
                        friends={this.state.searchedFriends}
                        token={this.state.token}
                        username={this.state.username}
                        isError={this.state.isError}
                        error={this.state.error}
                        searchEmpty={this.state.searchEmpty}
                        submitFriendChoice={this.submitFriendChoiceInParentContainer}
                        handleFriendChoice={this.handleFriendChoiceInParentContainer}
                        handleFriendChange={this.handleFriendChangeInParentContainer}
                        handleClick={this.handleClickInParentContainer}
                    />
                </div>
            </React.Fragment>
            
        )
    }
}

export default Friendlist;