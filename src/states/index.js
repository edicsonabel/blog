import React from 'react'
import { ContextProvider } from './context'
// import { Provider as  } from "react-redux";
// import store from "./store";

/*    COMPONTENTS AND UTILS    */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default ({ element }) => (
  <ContextProvider>
    {/* <Provider store={store}> */}
    <Navbar />
    {element}
    <Footer />
    {/* </Provider> */}
  </ContextProvider>
)
