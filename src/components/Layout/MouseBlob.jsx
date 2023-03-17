import React, { useEffect } from "react";

function MouseBlob() {
  useEffect(() => {
    const blob = document.getElementById("mouse-blob");
    const move = ({ x, y }) => {
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      if (y >= pageHeight - 550) y = y - 550;
      blob.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      move({ x: clientX, y: window.scrollY + clientY });
    };

    const handleScroll = (e) => {
      console.log("scroll");
      move({ x: window.innerWidth / 2, y: window.scrollY + 250 });
    };

    document.body.addEventListener("mousemove", handleMove);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="z-50">
      <div id="mouse-blob"></div>
      <div id="mouse-blob-blur" className="mouse-blob-blur"></div>
    </div>
  );
}

export default MouseBlob;
