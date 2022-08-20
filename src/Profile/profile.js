import React from "react";
const Profile = (props) => {
    return <div>
        <h1>name : {props.fullName}</h1>

        <h3>profession :{props.profession}</h3>

        <h5>bio : {props.bio}</h5>
        
       
    </div>
};
export default Profile;