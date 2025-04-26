import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import ProductDetailPage from './pages/ProductDetailPage';
import UserDashboardPage from './pages/UserDashboardPage';
import './styles/global.css';
import './styles/animations.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/product/:id" component={ProductDetailPage} />
                <Route path="/user/dashboard" component={UserDashboardPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;