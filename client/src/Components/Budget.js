import React, { useContext } from "react";
import '../ComponentsStyle.css';
import {AppContext} from "../Context/AppContext";

const Budget = () => {
    const  { budget } = useContext(AppContext);
    return (
        <div className="budget">
            <span>Budget: PLN {budget}</span>
        </div>
    )
}

export default Budget