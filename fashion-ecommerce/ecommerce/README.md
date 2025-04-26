# Fashion E-commerce Project

This is a full-stack eCommerce application themed around fashion and trending products. The project utilizes React for the frontend, Node.js with Express for the backend, and MongoDB as the database.

## Features

- **User Authentication**: Users can sign up and log in using JWT for secure authentication.
- **Admin Dashboard**: Admins can manage products, including adding, editing, and deleting items.
- **Product Listing**: Users can browse products by categories and search for specific items.
- **Product Detail Page**: Each product has a dedicated page with detailed information and animations.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Payment Integration**: Checkout functionality is integrated with Razorpay for secure payments.
- **User Dashboard**: Users can view their past orders and manage their account.
- **Responsive Design**: The application is mobile responsive and features 3D-style animations using Framer Motion.

## Technologies Used

- **Frontend**: React, Framer Motion, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment Gateway**: Razorpay

## Project Structure

```
fashion-ecommerce
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── orderController.js
│   │   │   └── productController.js
│   │   ├── middlewares
│   │   │   └── authMiddleware.js
│   │   ├── models
│   │   │   ├── Order.js
│   │   │   ├── Product.js
│   │   │   └── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   └── productRoutes.js
│   │   └── utils
│   │       └── jwtUtils.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── AdminDashboard.js
│   │   │   ├── Cart.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── LoginForm.js
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── ProductList.js
│   │   │   ├── SignupForm.js
│   │   │   └── UserDashboard.js
│   │   ├── contexts
│   │   │   └── AuthContext.js
│   │   ├── pages
│   │   │   ├── AdminPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── ProductDetailPage.js
│   │   │   ├── SignupPage.js
│   │   │   └── UserDashboardPage.js
│   │   ├── styles
│   │   │   ├── animations.css
│   │   │   └── global.css
│   │   └── utils
│   │       └── api.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up your `.env` file with the necessary environment variables.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License.
