// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

const FunctionalComponent =()=>{
    const hello = "Hello, World!";
    const details = "his React component is made by a function expression, we call it a function component" 
    return (
        <div>
            <h1>hello = {hello}</h1>
            <p>details = {details}</p>
        </div>
    )
}