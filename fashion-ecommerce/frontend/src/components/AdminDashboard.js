import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEdit = (id) => {
        history.push(`/admin/edit-product/${id}`);
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <button onClick={() => history.push('/admin/add-product')}>Add New Product</button>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleEdit(product._id)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;