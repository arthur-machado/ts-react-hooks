import React from 'react';
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

const App: React.FC = () => {
  return (
    <>
      <UseState />
      <UseRef />
      <UseContext />
    </>
  );
};

export default App;
