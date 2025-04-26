import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../utils/api';
import { motion } from 'framer-motion';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Welcome to Our Fashion Store</h1>
            <p>Discover the latest trends and styles.</p>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <ProductList products={products} />
            )}
        </motion.div>
    );
};

export default HomePage;