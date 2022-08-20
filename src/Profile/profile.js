import React from "react";
import PropTypes from "prop-types";
const styleObject={color:"red",textAlign:'center'}

const Profile = (props) => {
    return <div style={styleObject}>
        <h1>name : {props.fullName}</h1>

        <h3>profession :{props.profession}</h3>

        <h5>bio : {props.bio}</h5>
        
       <div >{props.cheldren}</div>
       <button onClick={props.f}>SUBMIT</button>
    </div>
};

Profile.defaultProps = {
    fullName: "yassin", profession: "etudiant", bio: "world", f: () =>{return alert("enter your name")}}
    Profile.propTypes = {
        fullName: PropTypes.string,
        profession: PropTypes.string,
        bio: PropTypes.string,
        f: PropTypes.func
       };
export default Profile;