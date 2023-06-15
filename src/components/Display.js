import React from 'react'

function Display(props) {
    const editbtn=(user)=>
    {
        props.editbtn(user)
    }
  return (
    <div>
        <h3>This is from display</h3>
      {props.users && props.users.map(user => {
          return(
            <div key={user.id}>
              
              <h3>{user.email}</h3>
              <h3>{user.name}</h3>
              <h3>{user.age}</h3>

              <button className='btn btn-success'onClick={()=>editbtn(user)}>Update</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          )  
      })}
    </div>
  )
}

export default Display