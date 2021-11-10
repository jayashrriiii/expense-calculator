

import React from 'react';


/*
        Header -  Displays heading and total expense

*/

function Header({totalExpense}) 
{
      return (
                <header>
                    <h1 className="heading">Expense Calculator</h1>
                    <div className="total-income">₹{totalExpense}</div>
                </header>
             );
}




export default Header;