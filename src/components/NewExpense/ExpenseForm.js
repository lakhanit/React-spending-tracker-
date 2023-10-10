import React,{useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm=(props)=>{
	const [enteredTitle,setEnteredTitle]=useState('');
	const [enteredAmount,setEnteredAmount]=useState('');
	const [enteredDate, setEnteredDate] = useState('');
    // const[userInput,setUserInput]=useState({
	// 	EnteredTitle:'',
	// 	enteredAmount:'',
	// 	enteredDate: ''

		

	//});
	const titleChangeHandler=(event)=>{
		setEnteredTitle(event.target.value);
    //    setUserInput({
	// 	...userInput,
	// 	enteredTitle:event.target.value
	//    });
	}
	const amountChangeHandler=(event)=>{
       setEnteredAmount(event.target.value);
	  // setUserInput({
       //...userInput,
      // enteredAmount: event.target.value,
     //});
	//  setUserInput((prevState)=>{
	// 	return{...prevState,enteredAmount:event.target.value

	// 	};
	 //});

	}
	const dateChangeHandler=(event)=>{
		setEnteredDate(event.target.value);
    //    setUserInput({
    //      ...userInput,
    //      enteredDate: event.target.value,
    //    });
	}
	// const inputChangeHanler=(identifier,value)=>{
    //     if (identifier==='title'){
	// 		setEnteredTitle(value);
	// 	}
	// 	else if (identier==='date'){
	// 		setEnteredDate(value);
	// 	}
	// 	else
	// 	setEnteredAmount(value)
	// }
	const submitHandler=(event)=>
	{
		event.preventDefault();
        const expenseData={
			title:enteredTitle,
			amount:+enteredAmount,
			date:new Date(enteredDate)
		};
		props.onSaveExpenseData(expenseData);
        console.log(expenseData);
		setEnteredTitle('');
		setEnteredDate('');
		setEnteredAmount('');
	};
	return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount}min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate }min='2019-01-01' max='2024-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
	  <div className="new_expense__actions">
		<button type='submit'>Add Expense</button>
	  </div>
    </form>
  );

}
export default ExpenseForm