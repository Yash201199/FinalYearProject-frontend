import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// import Layout from "../components/Layout";


const decoration = {


  width: '100px',
  height: '100px',
  backgroundColor: 'coral',
  color: 'white',
  animation: 'mymove-5s-infinite',

  // @keyframes mymove {
  //   50% {box-shadow: 10px 20px 30px blue;}
  // }
}






const Home = (props) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    
    <div className="container" style={{decoration}}>
      <div className="jumbotron ">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        {/* <a href="logo.png" alt="image"/> */}
        
      </div>
      </div>
  
    
  );
};

export default Home;
