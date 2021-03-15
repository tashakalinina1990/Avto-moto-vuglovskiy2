import React from "react";
import {ToastContainer, toast} from "react-toastify";
import PrimeHeader from "../prime-header/prime-header";
import PrimeFooter from "../prime-footer/prime-footer";
import Main from "../main/main";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <PrimeHeader />
      <Main />
      <PrimeFooter />
      <ToastContainer
        autoClose={5000}
        position={toast.POSITION.TOP_LEFT}
        pauseOnFocusLoss={false}
      />
    </React.Fragment>
  );
}

App.propTypes = {};

export default App;
