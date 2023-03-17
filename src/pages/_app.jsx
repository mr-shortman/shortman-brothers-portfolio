import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { InitialPageLoader } from "../components/Loader";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import useIntro from "../hoc/InitialLoadWrapper";

const App = ({ Component, pageProps }) => {
  const currTimestamp = Date.now();
  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours
  useEffect(() => {
    const storage = window.localStorage;
    const timestamp = JSON.parse(storage.getItem("timestamp") || "1000");

    const hasTimePassed = currTimestamp - timestamp > timeLimit;

    hasTimePassed
      ? storage.setItem("timestamp", currTimestamp.toString())
      : storage.setItem("timestamp", timestamp.toString());
  }, []);
  const intro = true;
  return (
    <AnimatePresence>
      {/* {intro ? <InitialPageLoader /> : null} */}
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default App;
