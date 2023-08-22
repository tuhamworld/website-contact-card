import React from "react"

export default function Contact(props) {
   
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="../images/about-icon.png" />
                <p>{props.about}</p>
            </div>
            <div className="info-group">
                <img src="../images/website-icon.png" />
                <p>{props.website}</p>
            </div>
            <div className="info-group">
                <img src="../images/email-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}