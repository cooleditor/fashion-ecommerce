import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getUserOrders } from '../utils/api';
import { motion } from 'framer-motion';

const UserDashboardPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getUserOrders(user.token);
            setOrders(response.data);
        };

        fetchOrders();
    }, [user.token]);

    return (
        <div className="user-dashboard">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome, {user.name}
            </motion.h2>
            <motion.div
                className="orders-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3>Your Orders</h3>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map(order => (
                        <div key={order._id} className="order">
                            <h4>Order ID: {order._id}</h4>
                            <p>Total: ${order.total}</p>
                            <p>Status: {order.status}</p>
                        </div>
                    ))
                )}
            </motion.div>
        </div>
    );
};

export default UserDashboardPage;