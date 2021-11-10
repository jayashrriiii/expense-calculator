import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';




function App() 
{
		const [data, setData] = useState([]);         //form data

		const [totalExpense, setTotalExpense] = useState(0);      //total expense


		//calculate total income
		useEffect(() => {
			let temp = 0;
			for(let i = 0; i < data.length; i++) 
			{
				temp += parseInt(data[i].price * data[i].count);
			}
			setTotalExpense(temp);
		}, [data]);
		

		return (
					<div className="App">
						<Header totalExpense={totalExpense} />
						<ItemForm data={data} setData={setData} />
						<ItemList data={data} setData={setData} />
					</div>
		       );
}





export default App;
