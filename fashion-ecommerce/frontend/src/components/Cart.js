import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {cartItems.map(item => (
                        <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                            <div className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
            <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;