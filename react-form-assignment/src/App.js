import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Bussiness',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    payment: 'CASH',
  },
  { id: 'e2', title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    payment: 'UPI',
   },
 
  
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
