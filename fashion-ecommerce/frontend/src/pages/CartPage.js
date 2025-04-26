import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    const history = useHistory();

    const handleCheckout = () => {
        // Logic for checkout (e.g., redirect to checkout page)
        history.push('/checkout');
    };

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Your cart is empty. Start adding products!
                </motion.p>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </motion.div>
            )}
        </div>
    );
};

export default CartPage;