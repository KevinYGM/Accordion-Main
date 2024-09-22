import './App.css';
import star from './assets/icon-star.svg';
import buttonPlus from './assets/icon-plus.svg';
import buttonMinus from './assets/icon-minus.svg';
import { useState } from 'react';
import faqData from './faqData';

function App() {

  const [stateButton, setStateButton] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const openClosed = () => {
    setStateButton(prevState => !prevState);
    setOpenInfo(prevState => !prevState);
  }

  return (
    <>
      <div className="background-up"></div>
      <div className="background-down"></div>
      <div className="window-float">

        {/* Title */}
        <div className='title'>
          <img src={star} alt='Star'/>
          <h1>FAQs</h1>
        </div>


        {/* Question */}

        {faqData.map(data => (
          <div key={data.id} className="question">
          <h2>
            {data.question}
          </h2>

          <img  src={stateButton ? buttonMinus : buttonPlus} 
                alt="Button for open or Closed" 
                onClick={ openClosed }/>
          
          <div className={`accordion ${openInfo ? 'open' : ''}`}>
            <p>{data.answer}</p>
          </div>
        </div>
       ))}
      </div>
    </>
  );
}

export default App;
