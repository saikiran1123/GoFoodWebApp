# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `nodemon ./index.js`

This command in the backend directory will start the server.
This will connect to the mongoDB database.
Open [http://localhost:3000](http://localhost:5000) to view it in your browser.


## Components

### Card
This contains the food item image, price, quantity, size. The total amount is showed after applying all the changes for the item as per requirements.

### Carousel
This will show the special fooditems of the day in the restarent.

### Footer
This indicate the copyright, year and the company name of the restarent.

### Navbar
This show the options for the user like Home , MyOrders, Signup, Login, Logout , cart so that user can directly navigate to that page.

### ContextReducer
This page provides a context and a reducer to manage the state of a shopping cart in a React application. It includes actions to add, remove, update, and clear items in the cart.

## Screens

### Home
The home page of a restaurant typically features appealing images, a brief introduction, highlighted menu items, and contact information. It also includes navigation links to other pages like Menu, About, Signup, Login.

### Login
If the user is having a account or previous order in the restarent then the user can easily able to login , reorder and check the previous order data of the user.
This asks the credentials of the user to login.

### Signup
If the user is new to the restaurant, to signup the credentials and address will asked and stored in the database.

### Cart
This page shows the Items that have been order to the cart and their quantities also the total price of the cart items.

### MyOrders
This page shows all the previous order data after the login only else this page is not shown.

