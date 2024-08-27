import React, { useRef, useEffect } from "react";

function Star({ id, x, y, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);
  return (
    <div
      ref={starRef}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `20px`,
        height: "20px",
        backgroundColor: "yellow",
        cursor: "pointer",
        outline: "none",
      }}
      tabIndex="0"
      onClick={() => destroyStar(id)}
    />
  );
}

export default Star;
