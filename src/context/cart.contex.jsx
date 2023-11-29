
import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id? 
        {...cartItem, quantity:cartItem.quantity +1}:cartItem)}
    return[...cartItems,{...productToAdd, quantity:1 }]}

const removeCartItem = (cartItems,cartItemToRemove)=>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id);}

    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id? 
    {...cartItem, quantity:cartItem.quantity - 1}:cartItem)}

    const clearCartItem = (cartItems,clearItemFromCart)=>{return cartItems.filter(cartItem=>cartItem.id !== clearItemFromCart.id);}

   


export const CartContext = createContext({
    isCartOpen:false, 
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemtoCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0, 
    cartTotal : 0})

export const CartProvider = ({children})=>{
    
    const[isCartOpen,setIsCartOpen] = useState(false)
    
    const [cartItems,setcartItems]=useState([])

    const [cartCount,setcartCount]= useState(0)

    const [cartTotal,setcartTotal]=useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0)
        setcartCount(newCartCount);
    },[cartItems])
    
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0)
        setcartTotal(newCartTotal);
    },[cartItems])


    const addItemtoCart = (productToAdd) =>
    {setcartItems(addCartItem(cartItems,productToAdd));};
     
    const removeItemFromCart = (cartItemToRemove) =>
    {setcartItems(removeCartItem(cartItems,cartItemToRemove));}

    const clearItemFromCart = (cartItemToRemove) =>
    {setcartItems(clearCartItem(cartItems,cartItemToRemove));}
    
    const value = {isCartOpen,cartTotal,clearItemFromCart,setIsCartOpen,addItemtoCart,cartItems,cartCount,removeItemFromCart};
    
return( <CartContext.Provider value={value}>{children}</CartContext.Provider>)}
