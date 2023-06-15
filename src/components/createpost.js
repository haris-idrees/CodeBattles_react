import React, { useState } from 'react';
import APIServices from '../APIServices';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [post_text, setPostText] = useState('');
  const [user_id, setUserId] = useState();
  const [num_of_likes, setNumLikes] = useState(0);
  const [num_of_dislikes, setNumDislikes] = useState(0);
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState('');
  const [post_image, setPostImage] = useState('');
  const loggedIn_id = sessionStorage.getItem('id');
  const user_name = sessionStorage.getItem('name');
  const user_img = sessionStorage.getItem('profile_picture');
  const [fileVisible, setVisible] = useState(null);

  function submitPostImage(e) {
    const data = new FormData();
    var img = e.target.files[0];
    var blob = img.slice(0, img.size);

    var newFile = new File([blob], `PostPicture`, { type: `${img.type}` });
    data.append('file', newFile);
    data.append('upload_preset', 'CodeBattles');
    data.append('cloud_name', 'drvo4uxiv');

    fetch('https://api.cloudinary.com/v1_1/drvo4uxiv/upload', {
      method: 'post',
      body: data
    })
    .then((res) => res.json())
    .then((response_data) => {
      console.log(response_data['public_id']);
      alert('Post Picture Added!');
      setResponseData(response_data);
      setPostImage(response_data['public_id']);
      APIServices.insertPost(user_id, post_text, num_of_likes, num_of_dislikes, response_data['public_id'],
      user_img,user_name)
        .then((resp) => {
          console.log(resp);
          navigate('/timeline');
        })
        .catch((error) => {
          console.error('Error creating post:', error);
        });
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
  }
  
  const createPost = (event) => {
    event.preventDefault();
    // Call the insertPost function from APIServices and pass the post data
    APIServices.insertPost({
      user_id: loggedIn_id,
      post_text,
      num_of_likes,
      num_of_dislikes,
      post_image,
      user_name,
      user_img
      
    })
      .then((resp) => {
        console.log(resp);
        navigate('/timeline');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <form>
        <div>
          <input type='text' value={user_name} readOnly hidden></input>
          
        </div>
        <div>
          <input type='text' value={user_img} readOnly hidden></input>
         
        </div>
        <div>
          <input type="number" value={loggedIn_id} hidden readOnly />
          
        </div>
        <div>
          <input type="file" onChange={(e) => submitPostImage(e)} /><br /><br />
        </div>
        <div>
          <input type="text" value={post_text} onChange={(e) => setPostText(e.target.value)} />
          <label>Post Text</label>
        </div>
        <button type="submit" onClick={createPost}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;


