import React, {Component} from 'react'
import Title from '../Title'
import CartColumns from '../Cart/CartColumns'
import EmptyCart from '../Cart/EmptyCart'
import { ProductConsumer } from '../../context'

export default class Cart extends Component {
    render() {
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Seu" title="Carrinho" />
                                    <CartColumns />
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart /> 
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}