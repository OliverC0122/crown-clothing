import './cart-item.style.scss'

const CartItem = ({cartItem}) => {
    const {imageUrl,name,quantity,price} = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>${price}.00 x {quantity} </span>
            </div>
            
        </div>
    )
}

export default CartItem;