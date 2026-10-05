function CartItem(props) {
    return(
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.price}€</p>
            <button onClick={()=> props.decreaseCart(props.item)}>-</button>
            <span>  {props.item.quantity}  </span>
            <button onClick={()=> props.addToCart(props.item)}>+</button>


            <button onClick={()=> props.deleteALL(props.item.id)}>УДАЛИТЬ ТОВАР</button>
        </div>
    )

}
export default CartItem;