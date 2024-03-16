import React, { useState, useEffect, useContext } from "react";
import "../intro/intro.css";
import { Link } from "react-router-dom";
import axios from "../../connector";
import { CurrentUserContext } from "../../index";
import Header from "../header";

const IntroPage = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [introContent, setIntroContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/intro");
      const data = response.data;
      setIntroContent(data.payload);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div align="center">
       <div className="y">
        <nav className="r">
        <ul className="z">
        <Link to="#" style={{ padding: "1rem" }}>
          <button class="x">Home</button>
        </Link>
        <Link to="#" style={{ padding: "1rem" }}>
          <button class="x">Job Notification</button>
        </Link>
          <Link to="/user/about" style={{ padding: "1rem" }}>
          <button class="x">About</button>
        </Link>
        <Link to="/user/Contactus" style={{ padding: "1rem" }}>
          <button class="x">Contactus</button>
        </Link>
        <Link to="/user/login" style={{ padding: "1rem" }}>
          <button class="x">Login</button>
        </Link>
        <Link to="/user/Signup" style={{ padding: "1rem" }}>
          <button class="x">Signup</button>
          </Link>
          </ul>
        </nav>
        </div>
        <h1 class="s19">Find Your Dream Job Now</h1>
        <div class="search-container">
    <input type="text" class="search-input" placeholder="Search..." />
    <button class="search-button">Search..</button>
    
    <div class="comp1" id="resume">
        <h1>lets build your your resume with us</h1> 
        
        <img src="https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png"></img>
        <Link to="/user/Resumebuilder" style={{ padding: "1rem" }}>
        <button class="color-button">Build Here!</button>
        </Link>
      </div>

    <h1 className="s19"> Mnc's are</h1>
    <div id="mnc" class="comp">
      <img src="https://tse4.mm.bing.net/th?id=OIP.hqlEgjzfmrQlz9ytIj_35AHaD4&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse1.mm.bing.net/th?id=OIP.sa0ouSAH7lzyGOF_Nwd0wAHaHa&pid=Api&P=0&h=180" class="img" ></img>
      <img src="https://tse3.mm.bing.net/th?id=OIP.bN5MH5e96LBoQ_Qg6FyE2QHaD4&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse2.explicit.bing.net/th?id=OIP.-qsHehf9bna9qR0ScEFP7gHaDA&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse4.mm.bing.net/th?id=OIP.tqnDSI4pjyspG261hTWJrgHaCV&pid=Api&P=0&h=180" class="img"></img>
    </div>
    <h1 className="s19">banks are..</h1>
    <div class="comp">
      <img src="https://tse2.mm.bing.net/th?id=OIP.P4OzVWoKPweMZWE0Fy8S5gHaHa&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse1.mm.bing.net/th?id=OIP.ILNVyup3yzAhgvBXXoCK6QHaEA&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse3.mm.bing.net/th?id=OIP.BCuckS23S-lXTjeom_OE2AHaFj&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse1.mm.bing.net/th?id=OIP.YLJknnleGzQxjWVDEEZ5cAHaD4&pid=Api&P=0&h=180" class="img"></img>
    </div>
    <h1 className="s19">Startup Companies are..</h1>
    <div class="comp">
      <img src="https://tse4.mm.bing.net/th?id=OIP.x-pEEl9dQbh8D3_OOv4pLQHaEK&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse4.mm.bing.net/th?id=OIP.7PjwWLznjpirkH8m3EXAAgHaB7&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse3.mm.bing.net/th?id=OIP.ZpCHzjf3ewOJ-YXO4wocdgAAAA&pid=Api&P=0&h=180" class="img"></img>
      <img src="https://tse3.mm.bing.net/th?id=OIP.0y2SHRETO-JhAUINvlo7LQHaCO&pid=Api&P=0&h=180" class="img"></img>
      </div>
</div>
</div> 
    </>
  );
};

export default IntroPage;