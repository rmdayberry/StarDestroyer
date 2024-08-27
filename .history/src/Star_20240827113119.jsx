import React, { useRef, useEffect } from "react";
import "./Star.css";

function Star({ id, x, y, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);
  return (
    <div
      className="Star"
      style={{ left: `${x}px`, top: `${y}px` }}
      ref={starRef}
      tabIndex="0"
      onClick={() => destroyStar(id)}
    />
  );
}

export default Star;
