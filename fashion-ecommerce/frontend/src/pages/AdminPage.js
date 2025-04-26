import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import { getProducts } from '../utils/api';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <div className="admin-page">
            <header>
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <AdminDashboard products={products} />
        </div>
    );
};

export default AdminPage;