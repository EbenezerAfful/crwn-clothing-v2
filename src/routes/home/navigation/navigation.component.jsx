import { Fragment } from "react";

import './navigation-styles.scss'

import { ReactComponent as CrwnLogo  } from '/Users/pappy/pappy_clothing/src/assets/crown.svg';

import { Outlet,Link } from "react-router-dom"


const Navigator=()=>{
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
            <Link className="nav-link" to='/Sign-in'>
             SIGN IN
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }


  export default Navigator;