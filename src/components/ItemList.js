
import React from 'react';
import OneItem from './OneItem';


//display all rows


function ItemList({ data, setData }) 
{
          //remove entry
          const removeIncome = i => {
            let temp = data.filter((v, index) => index !== i);
            setData(temp);
          }  


          return (
                      <div className="income-list">
                        {
                          data.map((value, index) => (
                             <OneItem key={index} data={value} index={index} removeIncome={removeIncome} />
                          ))
                        }
                      </div>
                );
}





export default ItemList;