

function ProductCard(props) {
    return (
<div>
    <h2>{props.item.title}</h2>
    <p>{props.item.price}€</p>
    <button onClick={()=> props.addToCart(props.item)}>КУПИТЬ</button>
</div>
    )
}
export default ProductCard;