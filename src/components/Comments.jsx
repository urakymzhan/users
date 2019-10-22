import React, {Component} from 'react';
import {withRouter} from "react-router";


class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const {postId} = this.props.match.params;
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(data => data.json())
        .then(comments => this.setState({comments}))
    }


    render() {
        console.log(this.props.match.params)
        const {comments} = this.state;
        console.log(comments)
        return (
            <div>
                <ul>
                    {comments.map(comment=> {
                        return  <li key={comment.id}> <div> <strong>user email - </strong>{comment.email}</div><div><strong>comment: </strong>{comment.name}</div><br/></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Comments)