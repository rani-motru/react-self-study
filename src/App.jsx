import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
})

  console.log(products)

  // add state in here
  const [productList, setProductList] = useState(products)
  const [value, setValue] = useState("");

  // handleChange function
  const handleChange = event => {
  setForm({...form,[event.target.name]:event.target.value})
  }
// handleSubmit
 const handleSubmit = event =>{
  event.preventDefault()
  console.log('form in submit');
  console.log(form);
  const newProduct =  form;
  setProductList([newProduct, ...productList])
  setForm({
    itemName: "",
    price: 0,
    description: "Describe this item",
  })
}                  


  const [isHiring , setIsHiring]=useState(true);
  const toggleHiring = () => { setIsHiring(!isHiring) }

  // return
  return (

//     <div>
//       <h1> Hi there! </h1>
//       <ul> {products.map(item => <li>{item.itemName}</li>)} 
// </ul> 
//     </div>
//============ to get the FIRST PRODUCT ==============
//  <div>
//   <h1> Big Time Shopping </h1>
// {this.state.products[0].itemName} 
//</div> 
//========================================================
// now we have to update products instead of productList 
//and to iterate we HAVE TO USE .MAP FUNCTION.
//now it will display all the item names.
// we can remove the curly braces to the item.itemname,like this<ul> 
//      {productList.map(item => item.itemName) }</ul>  
//(it will give the o/p. if there are more items all will be mixed)
//like here if we see as ' allen wrenchcornucopia....'
 //to get the price  added item.price.
//=============================================================
<div>
   <h1 onClick={toggleHiring}> Big Time Shopping </h1>
   {isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}

  <form onSubmit ={handleSubmit}>
{/* <input 
          type="text"
          value={value.itemName}
          onChange={handleChange}
          name="value"
          placeholder='Write Name Here'/> */}
     <input    
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <br/>
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <br/>
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
        <br/>
         <input type="submit" value="Submit Form" />
 </form>
 <div> <h2>Preview our new item</h2> <h3>item Name:{form.itemName} </h3> 
      <h4>Price: ${form.price}</h4> 
      <h5>Desc: {form.description}</h5> 
      </div>

    <ul>
      {productList.map(item =><li>{item.itemName} {item.price}</li>)}
    </ul>
     
 
</div> 
  )
}

export default App;
