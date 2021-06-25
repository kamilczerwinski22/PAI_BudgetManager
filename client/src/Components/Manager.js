import '../ComponentsStyle.css';
import React, {useState} from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import {AppContext, AppProvider} from "../Context/AppContext";
import Axios from "axios";

export const Manager = props => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [expensesList, setExpensesList] = useState([]);

    const addSingleExpense = () => {
        Axios.post("http://localhost:81/create", {
            name: name,
            cost: parseFloat(cost)
        }).then(() => {
            setExpensesList([
                ...expensesList,
                {
                    name: name,
                    cost: parseFloat(cost)
                },
            ]);
            getExpensesList();
        });

    }

    const deleteExpense = (id) => {
        Axios.delete(`http://localhost:81/delete/${id}`).then((response) => {
            setExpensesList(
                expensesList.filter((val) => {
                    return val.id != id;
                })
            );
        });

    };

    const getExpensesList = () => {
        Axios.get("http://localhost:81/").then((response) => {
            setExpensesList(response.data);
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addSingleExpense();
    }


    return (
        <div>
            <AppProvider>
                <h1 className="calculatorMain">Budget Management Calculator</h1>
                <div className="wrapper">
                    <Budget/>
                    <Remaining/>
                    <ExpenseTotal/>
                </div>
            </AppProvider>
            <div>
                <h1 className="calculatorExpenses">Add Expense</h1>
                <form className="formBox" onSubmit={onSubmit}>
                    <div className="formText">
                        <label>Name</label><br/>
                        <input className="formInputBox" required='required' type='text' id='name' placeholder="Name" value={name}
                               onChange={(event) => {setName(event.target.value)}}/>

                    </div>
                    <div className="formText">
                        <label>Cost</label><br/>
                        <input className="formInputBox" required='required' type='text' id='cost' placeholder="Cost" value={cost}
                               onChange={(event) => {setCost(event.target.value)}}/>
                    </div>

                    <div className="formText">
                        <button className="formButton" type="submit">Add</button>
                    </div>
                </form>

            </div>
            <div className="openListBox">
                <button className="openListButton" onClick={getExpensesList}>Open Expenses</button>
                <div className="expenseBox">
                    {expensesList.map((val, key) => {
                        return (
                            <div className="expenseSingleBox">
                                <div className="wrapperItem">
                                    <div className="expenseSingleBoxText">
                                        {val.name}
                                    </div>
                                    <div className="expenseSingleBoxTextPrice">
                                        <span>PLN {val.cost}</span>
                                    </div>
                                    <div className="expenseSingleBoxDelete">
                                        <span onClick={() => deleteExpense(val.id)}>X</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )};

Manager.propTypes = {};