import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                {/* <Link to="/comments">Comments</Link> */}
            </nav>
        )
    }
}

export default Menu