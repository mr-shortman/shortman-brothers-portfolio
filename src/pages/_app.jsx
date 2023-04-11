import React from "react";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default App;
