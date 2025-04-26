# Fashion E-commerce Backend

This is the backend part of the Fashion E-commerce project, built using Node.js, Express, and MongoDB. The backend provides RESTful APIs for user authentication, product management, and order processing.

## Features

- **User Authentication**: Users can sign up and log in using JWT for secure authentication.
- **Product Management**: Admins can add, edit, and delete products.
- **Order Management**: Users can create orders and view their past orders.
- **Environment Configuration**: Uses a `.env` file for sensitive information like database connection strings and JWT secrets.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd fashion-ecommerce/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- **Authentication**
  - `POST /api/auth/signup`: User registration
  - `POST /api/auth/login`: User login

- **Products**
  - `GET /api/products`: Get all products
  - `POST /api/products`: Add a new product (Admin only)
  - `PUT /api/products/:id`: Update a product (Admin only)
  - `DELETE /api/products/:id`: Delete a product (Admin only)

- **Orders**
  - `POST /api/orders`: Create a new order
  - `GET /api/orders`: Get past orders for the logged-in user

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.