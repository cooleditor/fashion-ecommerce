import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};

export const fetchProducts = async (category) => {
    const response = await axios.get(`${API_URL}/products`, { params: { category } });
    return response.data;
};

export const fetchProductById = async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
};

export const addToCart = async (cartData) => {
    const response = await axios.post(`${API_URL}/cart`, cartData);
    return response.data;
};

export const fetchUserOrders = async (token) => {
    const response = await axios.get(`${API_URL}/orders`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const createOrder = async (orderData, token) => {
    const response = await axios.post(`${API_URL}/orders`, orderData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};