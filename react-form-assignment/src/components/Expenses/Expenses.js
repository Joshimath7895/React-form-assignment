import React from 'react';

import Card from '../UI/Card';

import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
 
  const Expenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesList items={Expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
