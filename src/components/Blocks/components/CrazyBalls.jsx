import React from "react";
import { BallCanvas } from "../../canvas";

function CrazyBalls({ data }) {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {data?.balls.map((ball) => (
        <div className="w-28 h-28" key={ball.tooltip}>
          <BallCanvas icon={"/uploads/tina.jpeg"} color={ball.color} />
        </div>
      ))}
    </div>
  );
}

export default CrazyBalls;
