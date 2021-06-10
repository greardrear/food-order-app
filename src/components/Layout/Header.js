import React from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import CartButton from './CartButton'
const Header = (props) => {
    return (
        <React.Fragment>
           <header className ={classes.header}>
            <h1> nTech </h1>
            <CartButton onOpenCart={props.onShowCart}/>
        
        </header> 
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="meals"/>
        </div>

        </React.Fragment>
            
        
    )
}

export default Header
