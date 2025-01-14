import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Symbol from './Symbol';

const Remaining = ({currency}) => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:<Symbol currency={currency} />{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
