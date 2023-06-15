import React, { useState, useEffect } from 'react'
import APIServices from '../APIServices'

function Form(props) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [date_of_birth, setdate_of_birth] = useState('')
    const [age, setAge] = useState('')
    const [contact, setContact] = useState('')
    const [user_type, setuser_type] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setName(props.user.name)
        setAge(props.user.age)
        setEmail(props.user.age)
        setdate_of_birth(props.user.age)
        setContact(props.user.age)
        setuser_type(props.user.age)
        setPassword(props.user.age)

    }, [props.article])

    const updateUser = () => {
        APIServices.UpdateUser(props.user.id, { email, name, date_of_birth, age, contact, user_type, password })
            .then(resp => props.updatedInformation(resp))

    }

    const insertUser = () => {
        APIServices.insertUser({ email, name, date_of_birth, age, contact, user_type, password })
            .then(resp => props.insertedInformation(resp))

    }
    return (
        <div>
            {props.user ? (
                <div className='mb-3'>
                    <lable htmlFor='Email' className='form-label'>Email</lable>
                    <input value={email} onChange={e => setEmail(e.target.value)} type='text' className='form-control' id='email' placeholder='Plz enter the email'></input>

                    <lable htmlFor='Name' className='form-label'>Name</lable>
                    <textarea value={name} onChange={e => setName(e.target.value)} type='text' className='form-control' id='name' placeholder='Plz enter the name'></textarea>

                    <lable htmlFor='Date of birth' className='form-label'>DOB</lable>
                    <textarea value={date_of_birth} onChange={e => setdate_of_birth(e.target.value)} type='date' className='form-control' id='dob' placeholder='Plz enter the dob'></textarea>

                    <lable htmlFor='Age' className='form-label'>Age</lable>
                    <textarea value={age} onChange={e => setAge(e.target.value)} type='text' className='form-control' id='age' placeholder='Plz enter the age'></textarea>

                    <lable htmlFor='contact' className='form-label'>Contact</lable>
                    <textarea value={contact} onChange={e => setContact(e.target.value)} type='text' className='form-control' id='contact' placeholder='Plz enter the contact'></textarea>

                    <lable htmlFor='user_type' className='form-label'>User Type</lable>
                    <textarea value={user_type} onChange={e => setuser_type(e.target.value)} type='text' className='form-control' id='user_type' ></textarea>

                    <lable htmlFor='Password' className='form-label'>Password</lable>
                    <textarea value={password} onChange={e => setPassword(e.target.value)} type='text' className='form-control' id='password' placeholder='Plz enter the password'></textarea>


                    {/* email,name,date_of_birth,age,contact,user_type,password */}
                    {props.user.id ? <button className='btn btn-success' onClick={updateUser}>Update User</button> : <button className='btn btn-success' onClick={insertUser}>Add Article</button>}



                </div>
            ) : null}
        </div>
    )
}

export default Form