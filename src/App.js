import { useState, useEffect } from 'react';

function App() {
  const [boxes, setBoxes] = useState([
    { bg: '#' + ((Math.random() * 0xffffff) << 0).toString(16) },
  ]);

  useEffect(() => {
    if (boxes.length <= 500) {
      const interval = setInterval(() => {
        setBoxes([
          ...boxes,
          { bg: '#' + ((Math.random() * 0xffffff) << 0).toString(16) },
        ]);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [boxes]);

  return (
    <div className='container'>
      {boxes.map((box, index) => (
        <div key={index} className='box' style={{ backgroundColor: box.bg }}>
          <p className='box__text'>{index}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
