import React, { Component } from 'react';
import "./About.css";
import Profile_pic from '../assets/Profile_pic.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class ="split left">
         <div className="centered">
          <img className="profile_image" alt="Profile Pic" src={Profile_pic}></img>
         </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title"> Ashley Kendrick</div>
            <div className="brief_description">
            <p>Hello my name is Ashley and I am a undergrad at Texas A&M Central Texas with a focus in software engineering
              and database design. I enjoy reading and walks around the park. I also like the
              color pink.</p> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}