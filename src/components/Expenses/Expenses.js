import React,{useState} from "react";

import ExpenseItem from "./expenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  
  const changeYearHandler=(enteredYear)=>{
    console.log(enteredYear);
    setEnteredYear(enteredYear);
  }
  return (

    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
        {props.items.map(expense=><ExpenseItem 
         key={expense.id}
         title={expense.title}
         amount={expense.amount} 
         date={expense.date}/>)}
        
        
      </Card>
    </div>
  );
};

export default Expenses;
