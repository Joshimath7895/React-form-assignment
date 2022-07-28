import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredPayment, setEnteredPayment] = useState('Cash');
  
 

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
   
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
   
  };
  const PaymentChangeHandler =(event)=>{
    const EnteredPayment = (event.target.value);
    setEnteredPayment(EnteredPayment);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      payment:enteredPayment,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredPayment('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
      <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Remark</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
    

        <div className='new-expense__control'>
        <label>Payment mode</label>
        <select   onChange={PaymentChangeHandler}>
            <option value='cash' >Cash</option>
            <option value='upi' >UPI</option>
           
        </select>
        </div>
        
        
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
