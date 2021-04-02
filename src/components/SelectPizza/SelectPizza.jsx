import { useSelector } from 'react-redux';
import react from 'react';
import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem'

function SelectPizza(){
    const pizza = useSelector( (store)=>{
        return store.pizzaMenu;
    })

    return(
        <>
            <h2>Menu</h2>
            <div>
                {pizza.map( (item) => 
                    <SelectPizzaItem item={item} key={item.id} />
                )}
            </div>
            <div>
                <button>NEXT</button>
            </div>
        </>
    )

}

export default SelectPizza;