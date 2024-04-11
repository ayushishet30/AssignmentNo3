import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const dataToPass = {
    prop1: 'Ayushi',
    prop2: 'Shet'
  };

  return (
    <div>
      <ChildComponent data={dataToPass} />
    </div>
  );
};

export default ParentComponent;
