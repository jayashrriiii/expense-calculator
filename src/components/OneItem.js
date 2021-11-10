

import React from 'react';


//make one row 


function OneItem({data, index, removeIncome}) 
{
    
      //remove item
      const removeHandle = i => {
        removeIncome(i);
      }

      return (
                  <div className="income-item">
                    
                    <div className="desc">{data.desc}</div>
                    <div className="price">₹{data.price}</div>
                    <div className="count">{data.count}</div>
                    <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
                    
                  </div>
             )
}





export default OneItem;