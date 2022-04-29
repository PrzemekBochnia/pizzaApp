import React from 'react'
import { Fragment } from 'react'
import PizzaImg from "../../assets/pizza.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Italian Pizza</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
          <img src={PizzaImg} alt='pizza'/>
        </div>
    </Fragment>
  )
}
export default Header
