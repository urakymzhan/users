import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";


class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({users}))
    }


    getUserEmail = id =>  {
        for(var i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].id == id) {
                return this.state.users[i].email
            }
        }
        return "Not Found";
    }

    render() {
        // this userId is from <Route path="/users/:userId"> in App.js
        const {userId} = this.props.match.params;  
        const currentUserEmail =  this.getUserEmail(userId);
        let showUserInfo = null;
        if (this.props.match.params.userId !== undefined) {
            showUserInfo = <span>Current User: {currentUserEmail}</span>
        }
        return ( 
            <ul> 
                {
                    this.state.users.map(user => {
                        return (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default withRouter(Users)