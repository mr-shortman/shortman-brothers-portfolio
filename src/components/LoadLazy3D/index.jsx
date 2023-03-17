import React, { useState, useEffect } from "react";

function LoadLazy3D({ children, delay, loading }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(
      () => {
        setIsLoading(false);
      },
      delay ? delay : 2000
    );

    return () => {
      isLoading;
    };
  }, []);

  return (
    <div className="w-full">
      {isLoading ? loading ? loading : <div>loading...</div> : children}
    </div>
  );
}

export default LoadLazy3D;
