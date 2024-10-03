
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
  // Create a ref to store a DOM element
  const myInputRef = useRef();

  // Expose certain properties/methods in the ref object
  useImperativeHandle(ref, () => ({
    focus: () => {
      myInputRef.current.focus();
    },
    getValue: () => {
      return myInputRef.current.value;
    },
  }));

  return (
    <div>
      <label>
        Type something:
        <input ref={myInputRef} type="text" />
      </label>
    </div>
  );
});

// Parent component
const ParentComponent = () => {
  // Create a ref to hold the ChildComponent instance
  const childRef = useRef();

  const handleButtonClick = () => {
    // Access the exposed methods through the ref
    childRef.current.focus();
    const value = childRef.current.getValue();
    console.log('Input value:', value);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;

