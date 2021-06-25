import React from "react";
import '../ComponentsStyle.css';

export const Contact = props => {
    return (
        <div>
            <div className="contactMain">
                Contact:
            </div><br/><br/>
            <div className="contactText">
                <span>Phone: 211 521 152</span><br/>
                <span>E-mail: kamilcze31@gmail.com</span>
            </div>
        </div>
    );
};

Contact.propTypes = {};