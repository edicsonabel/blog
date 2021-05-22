import React from "react";
import { Provider } from "react-redux";
import store from "./store";

/*    COMPONTENTS AND UTILS    */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default ({ element }) => (
  <Provider store={store}>
    <Navbar />
    {element}
    <Footer />
  </Provider>
);
