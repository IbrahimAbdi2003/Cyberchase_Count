import React, { useState } from 'react';
import Plus from './components/Plus';
import Minus from './components/Minus';
import InputNum from './components/InputNum';
import Reset from './components/Reset';
import Addfive from './components/Addfive';
import Subfive from './components/Subfive';
import Timetwo from './components/Timetwo';
import DivideTwo from './components/DivideTwo';

const App = () => {
  const [count, setCount] = useState(0);

  const timeTwo = () => {
    setCount(count * 2);
  };

  const divideTwo = () => {
    setCount(count / 2);
  };

  const fiveUp = () => {
    setCount(count + 5);
  };

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const fiveDown = () => {
    setCount(count - 5);
  };

  const inputNum = (number) => {
    let value = parseInt(number);
    setCount(count + value);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
    <div className='back-img'>
      <div className="container">
        <p>We've got the power!<br />
        Of one, two, three, four!</p>
        <h4>{count}</h4>
      </div>
      <div className="container-two">
        <Timetwo timeTwo={timeTwo} />
        <Addfive fiveUp={fiveUp} />
        <Plus countUp={countUp} />
        <Minus countDown={countDown} />
        <Subfive fiveDown={fiveDown} />
        <DivideTwo divideTwo={divideTwo} />
      </div>
      <div className="container-three">
        <InputNum inputNum={inputNum} />
        <Reset reset={reset} />
      </div>
    </div>
    </div>
  );
};

export default App;