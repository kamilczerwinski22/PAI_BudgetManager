import React, {useContext, useEffect, useState} from "react";
import '../ComponentsStyle.css';


const ExpenseTotal = () => {

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

    const totalExpenses = loadedExpenses.reduce((total, item)=>{
        return (total + item.cost);
    }, 0);

    return (
        <div className="spent">
            <span>Spent: PLN {totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal