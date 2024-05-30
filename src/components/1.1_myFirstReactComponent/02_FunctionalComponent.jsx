// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React from 'react';

const FunctionalComponent = () => {
    const hello = "Hello, World!";
    const details = "This React component is made by a function expression, we call it a function component"; 
    return (
        <div>
            <h1>{hello}</h1>
            <p>{details}</p>
        </div>
    );
}

export default FunctionalComponent;
