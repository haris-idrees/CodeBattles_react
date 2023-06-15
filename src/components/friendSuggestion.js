import React, { Component } from 'react';
import axios from 'axios';
import APIServices from '../APIServices';

class FriendSuggestion extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/listview/')
      .then((res) => {
        const data = res.data.users;
        console.log('Data fetched from API:', data);
        this.setState({
          users: data,
        });
      })
      .catch((err) => {
        console.log('Error fetching data from API:', err);
      });
  }

  sendRequest = (friendId) => {
    
    const user_id = sessionStorage.getItem('id');
    const body = {
        user_id: user_id,
        friendId: friendId
    };
    return axios.post('http://127.0.0.1:8000/addFriend/', body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resp) => {
        console.log(resp);
        if (resp.status === 'success') {
          console.log('Sending friend request to user with ID:');
        }
      });
    
  };

  render() {
    const { users } = this.state;

    return (
      <div className="friend-suggestion">
        <h2>Friend Suggestions</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <button onClick={() => this.sendRequest(user.id)}>Send Request</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FriendSuggestion;
