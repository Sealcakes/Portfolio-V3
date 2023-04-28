import React, { useState, useEffect } from 'react';
import './index.scss';

const Stars = () => {
  const [starsEven, setStarsEven] = useState([]);
  const [starsOdd, setStarsOdd] = useState([]);

  useEffect(() => {
    const newStarsOdd = [];
    const newStarsEven = [];
    for (let i = 0; i < 50; i++) {
      const star = {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      if (star.id % 2) {
        newStarsEven.push(star);
      } else {
        newStarsOdd.push(star);
      }
      
    }
    setStarsEven(newStarsEven);
    setStarsOdd(newStarsOdd);
  }, []);

  return (
    <div>
      {starsEven.map((evenStar) => (
        <div
          key={evenStar.id}
          className="even-stars"
          style={{ top: evenStar.y, left: evenStar.x }}
        />
      ))}
      {starsOdd.map((oddStar) => (
        <div
          key={oddStar.id}
          className="odd-stars"
          style={{ top: oddStar.y, left: oddStar.x }}
        />
      ))}
    </div>
  );
};

export default Stars;