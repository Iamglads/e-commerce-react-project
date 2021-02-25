import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button,  } from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const classes = useStyles()

    const handleUpdateCartQty = () => {}
    const handleRemoveFromCart = () => {}


    return (
        <Card>
            <CardMedia image={item.media.source} />
            <CardContent className={ classes.cardContent}>
                <Typography variant="h4"> { item.name } </Typography>
                <Typography variant="h5"> { item.line_total.formatted_with_symbol } </Typography>
            </CardContent>
            <CardActions className={ classes.cartActions }>
                <div>
                    <Button></Button>
                    <Typography></Typography>
                    <Button></Button>
                </div>
                <Button>Supprimer</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
