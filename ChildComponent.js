import React from 'react';

const ChildComponent = ({ data }) => {
  const { prop1, prop2 } = data;

  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
};

export default ChildComponent;
