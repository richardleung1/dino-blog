import React, { Component } from 'react';

class Dino extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            author: this.props.author,
            body: this.props.body,
            comment: this.props.comments[1],
            titleInput: "Title",
            authorInput: "Author",
            bodyInput: "Body",
            commentInput: "Comment"
        }
    }

    update = () => {
        this.setState({
            title: this.state.titleInput,
            author: this.state.authorInput,
            body: this.state.bodyInput,
            comment: this.state.commentInput
        })
    }

    updateTitle = (evt) => {
        const newValue = evt.target.value
        this.setState({ titleInput: newValue })
    }

    updateAuthor = (evt) => {
        const newValue = evt.target.value
        this.setState({ authorInput: newValue })
    }

    updateBody = (evt) => {
        const newValue = evt.target.value
        this.setState({ bodyInput: newValue })
    }

    updateComment = (evt) => {
        const newValue = evt.target.value
        this.setState({ commentInput: newValue })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>by {this.state.author}</p>
                <p>{this.state.body}</p>
                <h2>Comment</h2>
                <p>{this.state.comment}</p>

                <input value={this.state.titleInput} onupdate={this.updateTitle} />
                <input value={this.state.authorInput} onupdate={this.updateAuthor} />
                <input value={this.state.bodyInput} onupdate={this.updateBody} />
                <input value={this.state.commentInput} onupdate={this.updateComment} />
                <button onClick={this.update}>update</button>
            </div>
        )
    }
}

export default Dino;