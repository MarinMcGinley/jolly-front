import React, { Component } from 'react';

import Error from '../Error/Error';

import './addfriend.css';

class AddFriend extends Component {

    render() {
        return (
            <form className='addfriend-container' onSubmit={this.props.submitFriendChoice}>
                <input className={`input-box ${this.props.searchEmpty ? 'search-box' : null}`} type='text' value={this.props.friend} onChange={this.props.handleFriendChange} onClick={this.props.handleClick} />

                <ul className='friendsearch-list'>
                    {this.props.friends.map((item) =>
                        <li className='friend' key={item.username} onClick={() => this.props.handleFriendChoice(item)}>
                            <img className='profile-picture' src={item.image} alt={item.name} />
                            <p className='name'>{item.name}</p>
                        </li>
                    )}
                </ul>
                {this.props.friendFound ? <input className='button' type='submit' value='Add Friend' onClick={this.props.submitFriendChoice} /> : null} 
                {this.props.isError ? <Error withField={false} errorArray={this.props.error} /> : null}
            </form> 

        );
    }
}

export default AddFriend;