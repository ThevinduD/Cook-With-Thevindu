import React from "react"
import Star from "./Star"


export default function Contact() {

    const [contact, setContact] = React.useState({
        firstName: "Munna",
        phone: "0716498916",
        email: "munnabro@gmail.com",
        isFavourite: false
    })

    function toggleFav() {
        setContact(prev => ({...prev, isFavourite: !prev.isFavourite}))
    }


    return (
        <>
            <div className="contact-card">
                <img src="./src/images/person.png" alt="Contact" className="contact-image" />
                <div className="contact-details">
                    <Star isFilled={contact.isFavourite} handleClick={toggleFav} /> 
                    <h2 className="contact-name">{contact.firstName}</h2>
                    <p className="contact-mobile">{contact.phone}</p>
                    <p className="contact-email">{contact.email}</p>
                </div>
            </div>
        </>
    )
}