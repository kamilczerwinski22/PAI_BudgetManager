import {createContext, useReducer} from "react";
import React, {useEffect, useState} from "react";
// import LoadExpenses from "../Components/LoadExpenses";

const AppReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};

// const initialState = {
//
//     budget: 2500,
//     expenses: []
//     // expenses: [
//     //     {id: 12, name: "1Shopping", cost: 40},
//     //     {id: 13, name: "2Shopping", cost: 60},
//     //     {id: 14, name: "3Shopping", cost: 70}
//     // ]
// }



export const AppContext = createContext();

export const AppProvider = (props) => {

    // const loadData = LoadExpenses();
    // console.log("load data" + loadData)
    const initialState = {
        budget: 2500,
        // expenses: []
    }

    console.log("initial state")
    console.log(initialState)
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            // expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
};