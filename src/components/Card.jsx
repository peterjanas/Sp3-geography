import continentPic from "../assets/geo.png";
import React, { useState } from "react";


function Card(props) {

    const [isHovered, setIsHovered] = useState(false);


    


const cardStyle = {
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow: "5px 5px 5px black",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        maxWidth: "400px",
        display: "inline-block",
        cursor: "pointer",
        backgroundColor: isHovered ? "#f0f0f0" : "white",
        width: "100%",
       

        

    }

    const imgStyle = {
        maxWidth: "60%",
        height: "auto",
        borderRadius: "50%",
        marginBottom: "10px",
    }

    const titleStyle = {
        fontFamily: "Arial, sans-serif",
        margin: "0",
        color: "black",
    }

    const descriptionStyle = {
        fontFamily: "Arial, sans-serif",
        color: "black",
        textAlign: "center",
        lineHeight: "1.5", // Better spacing between lines

        
    }

    return ( 

        
        <div style={cardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img style={imgStyle} src={continentPic} alt="continent pic"></img>
            <h2 style={titleStyle}>{props.title}</h2>
            <p style={descriptionStyle}>{props.description}</p>
        </div>
     );
}

export default Card;