import React from 'react'
import './nav.css'
import { useState } from 'react';
import Description from './description';

function Profile() {
    const[state,setState]=useState({
        name:"Gautam",
        city:"sitarganj",
        gender:"male",
        image:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"
    });

    // const[bgColor,setBgColor]=useState("white");
    // const[textColor,setTextColor]=useState("black")

    const[style,setStyle]=useState({
        bgColor:"white",
        textColor:"black",
        text:"check to switch dark mode",
    });

    const getUserData=()=>{
            fetch("https://randomuser.me/api/?results=1")
            .then((res)=>res.json())
            .then ((userdata)=>{
                console.log(userdata)
                setState({
                    name: userdata.results[0].name.first,
                    gender:userdata.results[0].gender,
                    city:userdata.results[0].location.city,
                    image:userdata.results[0].picture.large,
                })
            });
           
    };
    const changeStyle=(event)=>{

        if (event.target.checked){
            // setBgColor("black");
            // setTextColor("white");
            setStyle({
                bgColor:"black",
                textColor:"white",
                text:"Uncheck to switch Light Mode"
            })
        }else{
            // setBgColor("white");
            // setTextColor("black");
            setStyle({
                bgColor:"white",
                textColor:"black",
                text:"check to switch dark mode"

            })
        }
    };

    return (
        <div className='card' style={{backgroundColor:style.bgColor,color:style.textColor}} >
            <div style={{width:"35%"}}>
                <img src={state.image} alt="" srcset=""
                    height="100%" width="100%" />
            </div>
            <div style={{ width: "65%",padding:"50px" }}>
                <dl>
                    <dt>
                        <b>User Name</b>
                    </dt>
                    <dd>{state.name}</dd>
                    <dt>
                        <b>City</b>
                    </dt>
                    <dd>{state.city}</dd>
                    <dt>
                        <b>Gender</b>
                    </dt>
                    <dd>{state.gender}</dd>
                    {/* <dt>
                        <b>Description</b>
                    </dt> */}
                    <Description/>
                    {/* <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente excepturi autem rerum fugit dolorum.</dd> */}
                    
                </dl>
                <button 
                onClick={getUserData} 
                >Random User</button>
                <br />
                <input onChange={changeStyle} type="checkbox"  style={{marginTop:"15px"}}/>
                {style.text}
            </div>
        </div>
    )
}

export default Profile;
