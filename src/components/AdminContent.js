import React, { useEffect, useState } from 'react';
import APIServices from '../APIServices';
import { useNavigate } from 'react-router-dom';

function AdminContent() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        APIServices.getAllUsers()
            .then(users => {
                setUsers(users);
            })
            .catch(error => {
                alert("Error in data fetching");
            });
    }, []);
    
    return (
        
        <div className="container">
            <h1>Users</h1>
            <table className='table table-hover table-responsive'>
                <thead className='table-success'>
                    <tr className="primary">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>User Type</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody> 
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.contact}</td>
                            <td>{user.user_type}</td>
                            <td>
                            <td><button onClick={() => navigate(`/updateprofile/${user.email}`)}>Update</button></td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default AdminContent
