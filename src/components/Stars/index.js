import React, { useState, useEffect } from 'react';
import './index.scss';

const Circles = () => {
  const [circlesEven, setCirclesEven] = useState([]);
  const [circlesOdd, setCirclesOdd] = useState([]);

  useEffect(() => {
    const newCirclesOdd = [];
    const newCirclesEven = [];
    for (let i = 0; i < 50; i++) {
      const circle = {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      if (circle.id % 2) {
        newCirclesEven.push(circle);
      } else {
        newCirclesOdd.push(circle);
      }
      
    }
    setCirclesEven(newCirclesEven);
    setCirclesOdd(newCirclesOdd);
  }, []);

  return (
    <div>
      {circlesEven.map((evenCircle) => (
        <div
          key={evenCircle.id}
          className="even-circles"
          style={{ top: evenCircle.y, left: evenCircle.x }}
        />
      ))}
      {circlesOdd.map((oddCircle) => (
        <div
          key={oddCircle.id}
          className="odd-circles"
          style={{ top: oddCircle.y, left: oddCircle.x }}
        />
      ))}
    </div>
  );
};

export default Circles;