import { Fragment,useContext } from "react";

import './navigation-styles.scss'

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
        <div className="navigation">
          <Link className="logo-container" to='/'>
          <div>
            <CrwnLogo className="logo"/>
          </div>
          </Link>
         
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
             SHOP
            </Link>
            {currentUser?(<span className="nav-link" onClick={SignOutUser}>{''}SIGN OUT{''}</span>):(<Link className="nav-link" to='/auth'>
             SIGN IN
            </Link>)}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }


  export default Navigator;