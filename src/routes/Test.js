import React, { Component } from 'react';

import { postData } from '../API/general';


class Test extends Component {

    async componentDidMount() {
        const data = await this.testAsync()
        console.log(data);
    }



    async testAsync() {
        const result = await postData('/users/login', { username: "johanna", password: "lykilord" });
        console.log(result);
    }

    render() {

        return (
            <React.Fragment>
                <p>Test</p>
                
            </React.Fragment>
            
        );
    }
}

export default Test;