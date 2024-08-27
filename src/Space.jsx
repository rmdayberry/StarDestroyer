import React, { useState, useEffect } from "react";
import Star from "./Star.jsx";
import "./space.css";

const star_size = 20;

function Space() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStars((prevStars) => [
        ...prevStars,
        {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - star_size),
          y: Math.random() * (window.innerHeight - star_size),
        },
      ]);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const destroyStar = (id) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  };

  return (
    <div className="Space">
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          x={star.x}
          y={star.y}
          destroyStar={destroyStar}
        />
      ))}
    </div>
  );
}

export default Space;
