import './cart-item.stys.scss'


const CartItem = ({cartItem})=>{
    const{imageUrl,name,quantity,price}= cartItem;
    return(
        <div className='cart-item-container '>
         <img src={imageUrl} alt={`${name}`} />
         <div className='item-details'>
         <span className='name'>{name}</span>
         <span className='price'>{quantity}*${price}</span>
         </div>
         <span>{quantity}</span>
        </div>
    )}



    export default CartItem;