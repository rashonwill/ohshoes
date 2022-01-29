import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Shoes,
  Hats,
  Accessories,
  Admin,
  Cart,
  Dashboard,
  Inventory,
  Landing
} from "../components";

const Pages = ({
  products,
  setProducts,
  users,
  cart,
  setCart,
  addToCart,
  onAdd,
  userCart,
  setUserCart
}) => {
  return (
    <>
   
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute exact path="/admin">
          <Admin setProducts={setProducts} />
        </PrivateRoute> */}
   

        <Route exact path="/">
          <Home products={products} addToCart={addToCart} onAdd={onAdd} userCart={userCart} setUserCart={setUserCart}/>
        </Route>
        <Route exact path="/landing">
          <Landing/>
        </Route>

        <Route exact path="/shoes">
          <Shoes products={products} />
        </Route>

        <Route exact path="/hats">
          <Hats products={products} />
        </Route>

        <Route exact path="/accessories">
          <Accessories />
        </Route>

       

        {/* <Route exact path="/register">
          <Register />
        </Route> */}

        {/* <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route> */}

        <Route exact path="/cart">
          <Cart cart={cart} setCart={setCart}/>
        </Route>

         <Route exact path="/admin/users">
          <Users users={users} />
        </Route>

        <Route exact path="/admin/inventory">
          <Inventory products={products} setProducts={setProducts} />
        </Route> 
     
    </>
  );
};

export default Pages;