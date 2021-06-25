import React, {useContext, useEffect, useState} from "react";
import '../ComponentsStyle.css';
import {AppContext} from "../Context/AppContext";

const Remaining = () => {

    const [loadedExpenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:81/")
            .then(res => res.json())
            .then(
                (result) => {
                    setExpenses(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = loadedExpenses.reduce((total, item)=>{
        return (total + item.cost);
    }, 0);

    return (
        <div className="remaining">
            <span>Remaining: PLN {budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining