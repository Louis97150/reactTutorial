function Contact(props) {
    console.log(props)
    return(
        <article className="contact-card">
                <img 
                    src={props.img}
                    alt={props.alt}
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img 
                        src="./images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{props.name}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
    ) 
}

export default Contact