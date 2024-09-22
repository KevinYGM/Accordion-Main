import './App.css';
import star from './assets/icon-star.svg';
import buttonPlus from './assets/icon-plus.svg';
import buttonMinus from './assets/icon-minus.svg';
import { useState } from 'react';

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


        {/* First Question */}
        <div className="question">
          <h2>
            What is Frontend Mentor, and how will it help me?
          </h2>

          <img  src={stateButton ? buttonMinus : buttonPlus} 
                alt="Button for open or Closed" 
                onClick={ openClosed }/>
          
          {openInfo && (
              <p>
                Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.
              </p>
            )
          }
        </div>
        

        


        {/* Second Question */}
        <h2>
          Is Frontend Mentor free?
        </h2>

        <p> Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.</p>

        

        {/* Third Question */}
        <h2>
          Can I use Frontend Mentor projects in my portfolio?
        </h2>

        <p>
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!
        </p>



        {/* Fourth Question */}
        <h2>
          How can I get help if I'm stuck on a Frontend Mentor challenge?
        </h2>

        <p>
          The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members.
        </p>
      </div>
    </>
  );
}

export default App;
