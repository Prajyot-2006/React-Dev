# Mini E-Commerce Application

A simple and responsive mini e-commerce application built using React.

## Features

- Display products from local JSON data
- Search products by name
- Filter products by category
- View product details
- Add products to cart
- Increase and decrease product quantity
- Remove products from cart
- Display total items and total price
- Persist cart data using localStorage
- Responsive design for desktop, tablet and mobile
- Loading, error and empty states
- React Router navigation

## Technologies Used

- React
- JavaScript
- React Router
- CSS
- Vite
- localStorage

## Project Structure

```text
src/
├── components/
│   ├── CartItem.jsx
│   ├── CategoryFilter.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── SearchBar.jsx
│
├── data/
│   └── products.json
│
├── pages/
│   ├── Cart.jsx
│   ├── Home.jsx
│   └── ProductDetails.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx