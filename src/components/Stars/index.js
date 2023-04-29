import React, { useState, useEffect } from 'react';
import './index.scss';

const Stars = () => {
  const [starsGroup1, setStarsGroup1] = useState([]);
  const [starsGroup2, setStarsGroup2] = useState([]);
  const [starsGroup3, setStarsGroup3] = useState([]);
  const [starsGroup4, setStarsGroup4] = useState([]);
  const [starsGroup5, setStarsGroup5] = useState([]);

  useEffect(() => {
    const newStarsGroup1 = [];
    const newStarsGroup2 = [];
    const newStarsGroup3 = [];
    const newStarsGroup4 = [];
    const newStarsGroup5 = [];

    for (let i = 0; i < 50; i++) {
      const star = {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      if (star.id <= 10) {
        newStarsGroup1.push(star);
      } else if (star.id <= 20) {
        newStarsGroup2.push(star);
      } else if (star.id <= 30) {
        newStarsGroup3.push(star);
      } else if (star.id <= 40) {
        newStarsGroup4.push(star);
      } else {
        newStarsGroup5.push(star);
      }
      
    }
    setStarsGroup1(newStarsGroup1);
    setStarsGroup2(newStarsGroup2);
    setStarsGroup3(newStarsGroup3);
    setStarsGroup4(newStarsGroup4);
    setStarsGroup5(newStarsGroup5);
  }, []);

  return (
    <div>
      {starsGroup1.map((group1) => (
        <div
          key={group1.id}
          className="group1-stars"
          style={{ top: group1.y, left: group1.x }}
        />
      ))}
      {starsGroup2.map((group2) => (
        <div
          key={group2.id}
          className="group2-stars"
          style={{ top: group2.y, left: group2.x }}
        />
      ))}
      {starsGroup3.map((group3) => (
        <div
          key={group3.id}
          className="group3-stars"
          style={{ top: group3.y, left: group3.x }}
        />
      ))}
      {starsGroup4.map((group4) => (
        <div
          key={group4.id}
          className="group4-stars"
          style={{ top: group4.y, left: group4.x }}
        />
      ))}
      {starsGroup5.map((group5) => (
        <div
          key={group5.id}
          className="group5-stars"
          style={{ top: group5.y, left: group5.x }}
        />
      ))}
    </div>
  );
};

export default Stars;