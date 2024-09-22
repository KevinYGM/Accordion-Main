import './App.css';
import { useState } from 'react';
import star from './assets/icon-star.svg';
import buttonPlus from './assets/icon-plus.svg';
import buttonMinus from './assets/icon-minus.svg';
import faqData from './faqData';

function App() {
  const [openInfo, setOpenInfo] = useState(Array(faqData.length).fill(false));

  const toggleInfo = (index) => {
    setOpenInfo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <div className="background-up"></div>
      <div className="background-down"></div>
      <div className="window-float">

        {/* Title */}
        <div className='title'>
          <img src={star} alt='Star' />
          <h1>FAQs</h1>
        </div>

        {/* Questions */}
        {faqData.map((data, index) => (
          <div key={index} className="question">
            <h2 onClick={() => toggleInfo(index)} >{data.question}</h2>

            <img 
              src={openInfo[index] ? buttonMinus : buttonPlus} 
              alt="Button for open or closed" 
              onClick={() => toggleInfo(index)} 
            />
            
            <div className={`accordion ${openInfo[index] ? 'open' : ''}`}>
              <p>{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
