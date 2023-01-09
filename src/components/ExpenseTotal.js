import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Symbol from './Symbol';

const ExpenseTotal = ({currency}) => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far:<Symbol currency={currency} />{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
