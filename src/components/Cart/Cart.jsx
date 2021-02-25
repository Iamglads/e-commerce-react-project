import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import useStyles from './styles'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

    const classes = useStyles()
    const handleEmptyCart = () => onEmptyCart()


    const renderEmptyCart = () => {
        <Typography variant="subtitle1"> 
            Vous n'avez pas de produit dans votre panier,
            <Link className={classes.Link } to="/">ajouter un produit à votre panier</Link> !
        </Typography>
    }

    const renderCart = () => {
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={ lineItem } onUpdateCartQty={ onUpdateCartQty } onRemoveFromCart={ onRemoveFromCart }/>
                    </Grid>
                ))}
            </Grid>
            <div className={ classes.cardDetails}>
                <Typography variant="h4"> Total: { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                    <Button onClick={ handleEmptyCart }> Panier vide</Button>
                    <Button> Boutton 2</Button>
                </div>
            </div>
        </>
    }  


    // return 
    return (
        <Container>
            <div  className={classes.toolbar}/>
            <Typography className={ classes.title} variant="h3" gutterBottom>
             Votre pannier
            </Typography>
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
    )
}

export default Cart

 