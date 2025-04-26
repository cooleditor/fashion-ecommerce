# Fashion E-commerce Frontend

This is the frontend part of the Fashion E-commerce project, built using React. The application allows users to browse and purchase fashion products, manage their accounts, and provides an admin dashboard for product management.

## Features

- **User Authentication**: Users can sign up and log in using JWT for secure authentication.
- **Product Management**: Admins can add, edit, and delete products from the database.
- **Product Listing**: Users can view a list of products, filter by categories, and search for specific items.
- **Product Detail Page**: Each product has a dedicated page with detailed information and animations.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Checkout with Razorpay**: Integrated payment gateway for seamless transactions.
- **User Dashboard**: Users can view their past orders and manage their profiles.
- **Responsive Design**: The application is mobile-friendly and adapts to different screen sizes.
- **3D Animations**: Enhanced user experience with animations using Framer Motion.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up for the backend.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fashion-ecommerce/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add your environment variables.

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Folder Structure

- `public/`: Contains static files like `index.html` and favicon.
- `src/`: Contains all React components, pages, styles, and utility functions.
- `components/`: Reusable components for the application.
- `pages/`: Different pages of the application.
- `styles/`: CSS files for styling the application.
- `utils/`: Utility functions for API calls.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.