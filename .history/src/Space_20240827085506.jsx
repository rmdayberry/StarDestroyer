import React, { useEffect } from "react";
import Star from "./star";

const star_size = 20;

function Space() {
  const [stars, setStars] = useSate([]);

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
}
