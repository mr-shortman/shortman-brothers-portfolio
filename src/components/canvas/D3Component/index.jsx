import React, { useState, startTransition } from "react";
import Spline from "@splinetool/react-spline";

const D3Component = async ({ Component, splineUrl, className }) => {
  const [data, setData] = useState(null);

  // async function fetchData({}) {
  //   startTransition(() => {
  //     setData(fetchDataFromServer());
  //   });
  // }
  // useEffect(async () => {
  //   const data = await fetchData();
  //   return () => {
  //     data;
  //   };
  // });

  return (
    <div></div>
    // <React.Suspense fallback={<div>Loading...</div>}>
    //   {splineUrl ? (
    //     <Spline className={`${className}`} scene={`${splineUrl}`} />
    //   ) : null}

    // </React.Suspense>
  );
};

export default D3Component;
