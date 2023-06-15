import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import APIServices from '../APIServices';
import StickyFooter from './StickyFooter';
import { useNavigate } from 'react-router-dom';

function Timeline() {
    const [problems, setProblems] = useState([]);
    const publicId = '34ProfilePicture_kzhlk0';
    const cloudinaryURL = `https://res.cloudinary.com/drvo4uxiv/image/upload/${publicId}`;
    const navigate = useNavigate();

    useEffect(() => {
        APIServices.getAllProblems()
            .then(problems => {
                setProblems(problems);
                console.log(problems);
            })
            .catch(error => {
                alert("Error in data fetching");
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="post_css">
                {problems.map(problem => (
                    <div className="f-card" key={problem._id}>
                        
                        <div className="header">
                            {/* Display problem details */}
                            <div >
                                <img style={{ float: 'left', marginRight: '8px', width: '40px', height: '40px' }} src={cloudinaryURL} alt="User Profile Picture" />
                            </div>

                            <div className="co-name">
                                <p>{problem.Prob_name}</p>
                            </div>
                            {/* Modify the time display according to your requirement */}
                            <div className="time">
                                <a href="#">{problem.date_added}</a> · <i className="fa fa-globe"></i>
                            </div>
                        </div>
                        <div className="content">
                            <p>{problem.Prob_description}</p>
                        </div>
                        <button onClick={() => navigate(`/compiler/${problem.Prob_name}`)}>Solve Now</button>
                        {/* Display other problem details and social buttons as needed */}
                    </div>
                ))}
            </div>

            <StickyFooter />
        </div>
    );

}

export default Timeline;
