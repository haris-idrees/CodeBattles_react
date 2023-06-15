import React from "react-dom";
import "./ProfileContent.css";
import { useEffect, useState } from "react";
//cloud libraries
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import APIServices from "../APIServices";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './ProfilePost.css';

export default function ProfileContent() {

    const [description, setDescription] = useState('');
    const [profile, setProfile] = useState(null);
    const [cover, setCover] = useState(null);
    const [fileVisible, setVisible] = useState(null);
    const [coverFileVisible, setCoverFileVisible] = useState(null);
    const [responseData, setResponseData] = useState("");
    const [coverResponseData, setCoverResponseData] = useState("");
    const [profile_picture, setProfile_picture] = useState();
    const navigate = useNavigate();
    const loggedIn_id = sessionStorage.getItem('id');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfileDetails = () => {
            const userEmail = sessionStorage.getItem('email');

            axios
                .get('http://127.0.0.1:8000/getuserdetails/', {
                    params: {
                        email: userEmail,
                    },
                })
                .then((res) => {
                    const data = res.data.user_details;
                    console.log('Data fetched from API:', data);
                    setDetails(data);

                    setCover(new CloudinaryImage(data.cover_photo, { cloudName: 'drvo4uxiv' }));
                    setProfile(new CloudinaryImage(data.profile_picture, { cloudName: 'drvo4uxiv' }));
                    setVisible(false);
                    setCoverFileVisible(false);
                })
                .catch((err) => {
                    console.log('Error fetching data from API:', err);
                });
        };

        fetchProfileDetails();
    }, []);




    function submitImage(e) {
        const data = new FormData();
        var img = e.target.files[0];
        var blob = img.slice(0, img.size);

        var newFile = new File([blob], `${details.id}ProfilePicture`, { type: `${img.type}` });
        data.append("file", newFile);
        data.append("upload_preset", "CodeBattles");
        data.append("cloud_name", "drvo4uxiv");


        fetch("https://api.cloudinary.com/v1_1/drvo4uxiv/upload", {
            method: "post",
            body: data
        }).then((res) => res.json())
            .then((response_data) => {
                console.log(response_data['public_id']);
                alert("Profile Picture Updated!");
                setResponseData(response_data);
                const user_id = details.id;
                APIServices.UpdateUser(user_id, {
                    name: details.name,
                    email: details.email,
                    password: details.password,
                    country: details.country,
                    profile_picture: response_data['public_id']
                })
                    .then((resp) => {
                        console.log(resp);
                        navigate('/profile');
                        window.location.reload() // Navigate to the profile page
                    });

            })

    }

    function submitCoverImage(e) {

        const data = new FormData();
        var img = e.target.files[0];
        var blob = img.slice(0, img.size);
        var newFile = new File([blob], `${details.id}CoverPicture`, { type: `${img.type}` });
        data.append("file", newFile);
        data.append("upload_preset", "CodeBattles");
        data.append("cloud_name", "drvo4uxiv");


        fetch("https://api.cloudinary.com/v1_1/drvo4uxiv/upload", {
            method: "post",
            body: data
        }).then((res) => res.json())
            .then((response_data) => {
                console.log(response_data);
                alert("Cover Photo Updated!");
                setCoverResponseData(response_data)
                const user_id = details.id;
                APIServices.UpdateUser(user_id, {
                    name: details.name,
                    email: details.email,
                    password: details.password,
                    country: details.country,
                    cover_photo: response_data['public_id']
                })
                    .then((resp) => {
                        console.log(resp);
                        navigate('/profile'); // Navigate to the profile page
                        window.location.reload()
                    });

            })
            .catch((err) => console.log(err))
    }


    const [details, setDetails] = useState([]);
    useEffect(() => {
        const userEmail = sessionStorage.getItem('email');

        axios
            .get('http://127.0.0.1:8000/getuserdetails/', {
                params: {
                    email: userEmail,
                },
            })
            .then((res) => {
                const data = res.data.user_details;
                console.log('Data fetched from API:', data);
                setDetails(data);
                setDescription(data.description);

            })
            .catch((err) => {
                console.log('Error fetching data from API:', err);
            });
    }, []);

    useEffect(() => {
        APIServices.getUserPosts(loggedIn_id)
            .then(users => {
                setPosts(users); // Update the state with the fetched posts
            })
            .then(() => console.log("Posts fetched")) // Move the console.log inside the .then block
            .catch(error => {
                alert("Error in data fetching");
            });
    }, []);


  

    return (
        <>

            <body>
                <div class="header__wrapper">
                    <header>
                        <div className="container">
                            <AdvancedImage cldImg={cover} id="cover-photo" />

                            {
                                coverFileVisible ?
                                    <input id="cover_file" type="file" onChange={(e) => { submitCoverImage(e) }} /> :
                                    <></>
                            }
                        </div>
                        <button type="submit" className="update_cover_button" onClick={() => { setCoverFileVisible(true) }}>Update Cover</button><br /><br />
                    </header>
                    <br></br>
                    <br></br>
                    <div class="cols__container">
                        <div class="left__col">
                            <div class="img__container">
                                <AdvancedImage cldImg={profile} />
                                <span></span>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p>{details.name}</p><br />
                            {
                                fileVisible ?
                                    <div>
                                        <label id="profile_label">Choose Profile</label>
                                        <input type="file" id="profile_picture_input" onChange={(e) => { submitImage(e) }} /><br /><br />
                                    </div>
                                    :
                                    <></>
                            }
                            <button id="update_profile_button" onClick={() => { setVisible(true) }}>Update Picture</button><br /><br />
                            <ul class="about">
                                <li>
                                    <span>4,073</span>Friends
                                </li>
                                <li>
                                    <span>322</span>Posts
                                </li>
                                <li>
                                    <span>200,543</span>Groups
                                </li>
                            </ul>

                            <div class="content">
                                <p>
                                    {details.description}
                                    This is about my profile page. Haris please add another text
                                    field for about myself in user entity.
                                </p>
                                <div>
                                </div>

                                <ul>
                                    <li>
                                        <i class="fab fa-twitter"></i>
                                    </li>
                                    <i class="fab fa-pinterest"></i>
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-dribbble"></i>
                                </ul>
                            </div>
                        </div>
                        <div class="right__col">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">Feed</a>
                                    </li>
                                    <li>
                                        <a href="">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="">groups</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                </ul>
                                <br /><br /><br />
                                <button onClick={() => navigate(`/updateprofile/${details.email}`)}>Update Profile</button>
                            </nav>
                            <div class="post_css">
                                {/* <ProfilePost /><br />
                                <ProfilePost /><br />
                                <ProfilePost /><br /> */}

                                {posts.map(post => (
                                    <div key={post.id}>
                                        <div className="f-card">
                                            <div className="header">
                                                <div className="options">
                                                    <i className="fa fa-chevron-down"></i>
                                                </div>
                                                <AdvancedImage cldImg={profile} class="co-logo"/>
                                                <div className="co-name">
                                                    <a href="#">{details.name}</a>
                                                </div>
                                                <div className="time">
                                                    <a href="#">2hrs</a> · <i className="fa fa-globe"></i>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    {post.post_text}
                                                </p>
                                            </div>

                                            <div className="reference">
                                                {/* <img className="reference-thumb"  /> */}
                                                <AdvancedImage cldImg={new CloudinaryImage(post.post_image, {cloudName: 'drvo4uxiv'})} className="reference-thumb"/>
                                                {/* <div className="reference-content">
                                                    <div className="reference-title">
                                                        A quick and simple image placeholder service. | PLACEHOLDER.it
                                                    </div>
                                                    <div className="reference-subtitle">
                                                        How does it work? Just put your image size after our URL and
                                                        you'll get a placeholder.
                                                    </div>
                                                    <div className="reference-font">placeholder.it</div>
                                                </div> */}
                                            </div>
                                            <div className="social">
                                                <div className="social-content"></div>
                                                <div className="social-buttons">
                                                    <span>
                                                        <i className="fa fa-thumbs-up"></i>Like
                                                    </span>
                                                    <span>
                                                        <i className="fa fa-thumbs-down"></i>Dislike
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
