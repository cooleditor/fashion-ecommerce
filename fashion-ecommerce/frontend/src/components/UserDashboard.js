import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getUserOrders } from '../utils/api';
import { motion } from 'framer-motion';

const UserDashboard = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getUserOrders(user.token);
            setOrders(response.data);
        };

        if (user) {
            fetchOrders();
        }
    }, [user]);

    return (
        <div className="user-dashboard">
            <h2>Welcome, {user.name}</h2>
            <h3>Your Orders</h3>
            {orders.length === 0 ? (
                <p>You have no orders yet.</p>
            ) : (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {orders.map(order => (
                        <motion.li key={order._id} whileHover={{ scale: 1.05 }}>
                            <h4>Order ID: {order._id}</h4>
                            <p>Total: ${order.total}</p>
                            <p>Status: {order.status}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default UserDashboard;