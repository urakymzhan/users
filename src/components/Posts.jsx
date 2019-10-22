import React, {Component} from 'react';
import {withRouter} from "react-router";
import {
    Link
  } from "react-router-dom";

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            PostUserInfo: {}
        }
    }


    componentDidMount() {
        const { userId } = this.props.match.params;
        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(posts => this.setState({posts}))

        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data => data.json())
        .then(PostUserInfo => this.setState({PostUserInfo}))
    }
    render() {
        const { posts, PostUserInfo } = this.state;
        return (
            <div className="postsUserInfo">
                <strong>Current User:  </strong>{PostUserInfo.name}
                <ul>
                    {posts.map(post => {
                        const url = `/users/${post.userId}/posts/${post.id}/comments`
                        return <li><Link to={url}> {post.title} </Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Posts)