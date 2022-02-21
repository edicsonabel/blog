import React from 'react'
import { ContextProvider } from './context'
// import { Provider as  } from "react-redux";
// import store from "./store";

/*    COMPONTENTS AND UTILS    */
import ModeButton from 'components/ModeButton'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

/*    STYLES    */
import 'styles/index.sass'

const States = ({ element }) => {
  return (
    <>
      <ContextProvider>
        {/* <Provider store={store}> */}
        <ModeButton />
        <Navbar />
        {element}
        {/* </Provider> */}
      </ContextProvider>
      <Footer />
    </>
  )
}

export default States
