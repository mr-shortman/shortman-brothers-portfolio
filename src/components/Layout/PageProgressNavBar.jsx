import React, { useState, useEffect } from "react";

function PageProgressNavBar() {
  const [pageHeight, setPageHeight] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  useEffect(() => {
    setPageHeight(document.body.offsetHeight - window.innerHeight);

    const handleScroll = (e) => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setLineWidth(currentScrollTop / 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="absolute z-10 -right-1 md:right-10 -translate-y-1/2 top-1/2 transform">
      <div
        className="w-2 flex flex-col justify-between items-center"
        style={{ height: `${pageHeight}px` }}
      >
        {Array.from(new Array(Math.round(pageHeight / 20)).keys()).map(
          (_, idx) => (
            <div
              style={{
                width: `${idx % 2 === 0 ? lineWidth : lineWidth / 2}px`,
              }}
              className={`h-px  bg-white/40`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default PageProgressNavBar;
