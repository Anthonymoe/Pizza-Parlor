function SelectPizzaItem (props) {
   return ( 
       <>
        <li>{props.item.name}</li>
        <img src={props.item.image_path} />
        <li>{props.item.description}</li>
       </>
   )
}

export default SelectPizzaItem;