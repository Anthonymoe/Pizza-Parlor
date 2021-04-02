import { useState } from 'react';


function SelectPizzaItem (props) {
    const [ tempOrder, setTempOrder ] = useState( [] );
    //when add to oder button is clicked add the selected pizza to tempOrder [...]
    //once the selects the next button then we dispatch tempOrder to the store and store it as currentOrder
    

    let addToOrder = () => {
        console.log( 'you clicked the button with the id:', props.item.id );
        setTempOrder([...tempOrder, props.item]);
        console.log( tempOrder );

    }
   return ( 
       <>
        <h3><strong>{props.item.name}</strong></h3>
        <img src={props.item.image_path} />
        <p>{props.item.description}</p>
        <p>{props.item.price}</p>
        <button onClick={() => addToOrder(props.item)} id="props.item.id">Add to Order</button>
       </>
       
   )
}

export default SelectPizzaItem;