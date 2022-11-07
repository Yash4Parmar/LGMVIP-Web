import React from 'react'

const Card = ({ users }) => {
  return (
    <div className='row' id="main">
      {users.map(user =>

        <div class="card" style={{ width: "18rem" }}>
          <img src={user.avatar} class="card-img-top" alt="image" />
          <div class="card-body">
            <p class="card-text">ID: ${user.id}</p>
            <h1> {user.first_name} {user.last_name} </h1>
            <p class="card-text">Email: ${user.email}</p>
          </div>
        </div>
      )
      }
    </div >
  )
}
export default Card