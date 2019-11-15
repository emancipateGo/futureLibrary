import React, { useState } from 'react';
import { Styled } from 'direflow-component';
import { propTypes } from './componentProperties';
import styles from './App.css';

const App = (props) => {
  const [input, setInput] = useState('');

  // Create first Future Form
  //

  return (
    <Styled styles={styles}>
      <div className='app'>
        <div className='header-title'>{props.componentTitle}</div>
        <div className='sub-title'>To get started:</div>
        <form>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      </div>
    </Styled>
  );
};

App.propTypes = propTypes;

export default App;
