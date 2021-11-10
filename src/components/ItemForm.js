import React, {useRef} from 'react';



/*   form handling  -   get entered data   */


function ItemForm({ data, setData }) 
{
            const desc = useRef(null);
            const count = useRef(null);
            const price = useRef(null);

            const AddIncome = e => {
                  e.preventDefault();

                  //get entered data
                  setData([...data, {
                    "desc": desc.current.value,
                    "price": price.current.value,
                    "count": count.current.value
                  }]);

                  desc.current.value = "";
                  price.current.value = null;
                  count.current.value = null;
            }

            return (
                        <form className="income-form" onSubmit={AddIncome}>
                          <div className="form-inner">

                            <input type="text" name="desc" id="desc" placeholder="Item" ref={desc} /> 
                            
                            <input type="number" name="price" id="price" placeholder="Price" ref={price}/>
                            <input type="number" name="count" id="count" placeholder="Count" ref={count} />
                            
                            <input type="submit" value="ADD" />

                          </div>
                        </form>
                  )


}




export default ItemForm;