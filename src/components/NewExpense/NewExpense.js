import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense=(props)=>{
	const [isEditing,setEditing]=useState(false);
	const editHandler=()=>{
		setEditing(true);

	}
	const stopEdit=()=>
	{
		setEditing(false);
	}
    const saveExpenseDataHandler=(enteredExpenseData)=>{
       const expenseData={
		...enteredExpenseData,
		id: Math.random().toString()
	   };
	  props.onAddExpense(expenseData);
	  setEditing(false);
	}
	
    
	return (
	<div className='new-expense'>
		{!isEditing &&(
		<button onClick={editHandler}>Add New Expense</button>
	  )}
		{isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdit}
        />
      )}
	</div>
       );
};
export default NewExpense;