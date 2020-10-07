import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
   
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var email = this.props.data.email;
    }

    return (



   <section id="about">
   <div className="row">
      <div className="seven columns main-col">
         <h2>About Me</h2>
         <p>{bio}</p>
         <p className="bio2">{bio2}</p>
      </div>
      <div className="four columns">
         <div>
         <img className="profile-pic"  src={profilepic} alt="profile pic" />
         </div>
         <div className="email four columns">
               <p>
                  <a href={email} className="button"><i className="fa fa-envelope-o"></i>Email</a>
               </p>
         </div>
      </div>
   </div>

</section>
    );
  }
}

export default About;
