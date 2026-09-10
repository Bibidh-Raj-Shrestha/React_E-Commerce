
# E-Commerce Web Application

A responsive e-commerce web application built with React, TypeScript, Tailwind CSS, and React Router.

The project includes product browsing, search, category filtering, price sorting, product details, authentication, cart management, and responsive layouts for desktop and mobile devices.

## Live Demo

https://brs-react-e-commerce.vercel.app/

## Features

- Responsive e-commerce interface
- Product listing and product details
- Product search
- Category filtering
- Price sorting
- Load more products
- Product reviews and ratings
- Shopping cart
- Increase and decrease cart quantities
- Remove products from cart
- Cart total calculation
- Login and registration UI
- Protected cart route
- Persistent login using localStorage
- Responsive desktop and mobile navigation
- Mobile bottom navigation
- Banner slideshow
- Loading and empty states

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite
- JSON Server
- Remix Icon
- ESLint

## Project Structure

```text
src/
├── components/      # Reusable UI components
├── context/         # Authentication and cart state
├── datas/           # Static application data
├── pages/           # Application pages
├── types/           # TypeScript types
├── App.tsx          # Application routes
├── main.tsx         # Application entry point
└── index.css        # Global styles

public/
├── banners/         # Banner images
├── logo.png         # Application logo
└── ...

db.json              # Local application data
````

## Main Pages

* Home
* Products
* Product Details
* Categories
* Cart
* Login
* Register
* Dashboard

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the JSON Server

```bash
npx json-server --watch db.json
```

### 5. Start the development server

Open another terminal and run:

```bash
npm run dev
```

The application will then be available at the local URL provided by Vite.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000
```

The application uses `VITE_API_URL` as the base URL for product API requests.

## Authentication

Authentication in this project is implemented for frontend practice and demonstration purposes.

Login state is persisted using `localStorage`.

This is **not production authentication**. A production application should use a backend authentication system with secure password hashing, sessions or secure tokens, and appropriate security practices.

## Data

The project currently uses a local `db.json` file with JSON Server for development.

The frontend communicates with the API to:

* Retrieve products
* Search products
* Filter products by category
* Retrieve individual product details

## Responsive Design

The interface is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

Responsive behavior is implemented using Tailwind CSS breakpoints.

## Future Improvements

* Real backend authentication
* Database integration
* Persistent cart storage
* Real checkout and payment integration
* Order management
* User profiles
* Product administration
* Production API
* Improved error handling

## Author

**Bibidh Raj Shrestha**

## License

This project was created for learning and portfolio purposes.
