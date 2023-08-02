import React,{useState} from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  
  const changeYearHandler=(enteredYear)=>{
    console.log(enteredYear);
    setEnteredYear(enteredYear);
  }
  let filteredArray=props.items.filter(item=>{
    return item.date.getFullYear().toString()===enteredYear;
  })
  
  return (

    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
        <ExpensesList items={filteredArray}/>
        
      </Card>
    </div>
  );
};

export default Expenses;
