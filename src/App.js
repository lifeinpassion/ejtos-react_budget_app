import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';
import { currencies } from './components/Data';
import './App.css';

const App = () => {
    const [currency, setCurrency] = useState(currencies[1]);
    return (
        <AppProvider>
            <div className='container'>
                {/* Add the code here to add the components          */}
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm-4'>
                        <Budget currency={currency}/>
                    </div>
                    <div className='col-sm-3'>
                        <RemainingBudget currency={currency} />
                    </div>
                    <div className='col-sm-3'>
                        <ExpenseTotal currency={currency} />
                    </div>
                    <div className='col-sm-2'>
                        <Currency currency={currency} onCurrencyChange={setCurrency} />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <ExpenseList currency={currency} />
                    </div>
                </div>
                <h3 className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={currency} />
                    </div>

                </h3>
            </div>
        </AppProvider>
    );
};
export default App;
