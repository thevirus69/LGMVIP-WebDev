import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      <div className="grid">
      {props.userData.map((user, index) => {
        return (
          <div class="column">
            <p><b>User ID:{" "+ user.id}</b></p> 
            <div class="image">
              <img src={user.avatar} alt="" className="avatar"></img>
              <h2 className="name">
                {user.first_name}
                <span>{user.last_name}</span>
              </h2>
              <p className="email">{user.email}</p>               
            </div>
          </div>
        );
      })}
       </div>
    </>
  );
}
