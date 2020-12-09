import React, { Component } from 'react';

class Dino extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h1>Title: {this.props.title}</h1>
                <p>Author: {this.props.author}</p>
                <p>Body: {this.props.body}</p>
            </div>
        )
    }
}

export default Dino;