import React, { Component } from 'react';
import './post.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      dislikes: props.dislikes,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  }

  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  }

  render() {
    const { image,profileImage, name } = this.props;
    const { likes, dislikes } = this.state;
    return (
      <div className="Post">
        <div className="Profile">
          <img className="ProfilePic" src={profileImage} alt="profile" />
          <span >{name}</span>
        </div>
        
        <div className="PostText">Hello this is my first post</div>
        <img src={image} width={400} alt="post" />
        
        <div className="Buttons">
          <button onClick={this.handleLike}>Like {likes}</button>
          <button onClick={this.handleDislike}>Dislike {dislikes}</button>
        </div>
      </div>
    );
  }
}