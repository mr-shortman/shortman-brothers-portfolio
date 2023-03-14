import React, { useEffect } from "react";

const useIntro = () => {
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

  return hasTimePassed;
};

export default useIntro;
