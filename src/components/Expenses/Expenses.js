import React,{useState} from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  
  const changeYearHandler=(selectedYear)=>{
    console.log(enteredYear);
    setEnteredYear(selectedYear);
  }
const filteredArray=props.items.filter(item=>{
    return item.date.getFullYear().toString()===enteredYear;
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeYear={changeYearHandler}
        />
     <ExpensesChart expenses={filteredArray}/> 
     <ExpensesList items={filteredArray} />
     
      </Card>
    </div>
  );
};

export default Expenses;
