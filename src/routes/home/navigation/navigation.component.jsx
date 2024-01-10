import { Fragment,useContext } from "react";

import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation-styles'

import { ReactComponent as CrwnLogo  } from '/Users/pappy/pappy_clothing/src/assets/crown.svg';

import CartIcon from "../../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../../components/cart-dropdown/cart-dropdown.component";

import { Outlet,Link } from "react-router-dom"

import { UserContext } from "../../../context/user.context";

import { CartContext } from "../../../context/cart.contex";

import { SignOutUser } from "../../../Utils/firebase/firebase.utils";



const Navigator=()=>{
  const {currentUser}= useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  

      return(
      <Fragment>
        <NavigationContainer className="navigation">
           
          <LogoContainer to='/'>
            <CrwnLogo className="logo"/>
          </LogoContainer>
          
         
          <NavLinks className="nav-links-container">
            <NavLink className="nav-link" to='/shop'>
             SHOP
            </NavLink>
            {currentUser?
            (<NavLink as='span' onClick={SignOutUser}>{''}SIGN OUT{''}</NavLink>):
            (<NavLink to='/auth'>
             SIGN IN
            </NavLink>)}
            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>} '    '
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }


  export default Navigator;