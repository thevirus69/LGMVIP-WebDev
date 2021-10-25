import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./componets/Cards";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <Router> */}

      <section className="wholecontainer">
        <div class="topnav" id="myTopnav">
          <a
            rel="noreferrer" href="/"   class="active" >User Profile : LGMVIP Task 2 </a>
          
          
          <button type="button" onClick={handleClick} class="button-63">GET USERS</button>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="instruction">
                <p align="center"><h3>Click on "Get Users"</h3></p>
              </div>


            )}
          </div>
        </div>
      </section>
   

      {/* </Router> */}
    </>
  );
}

export default App;

