import React, { useState } from "react";

const Todo = () => {
const [state,setState] =useState(7);
return( 
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            border: "3px solid black",
            width:" 60%",
            background: "white",
            color:"black",
            padding:"60px",
            marginLeft:"200px",
            marginRight:"400px",
        }}>
        <h1>Todo</h1>
        <h1>{state}</h1>
        <button onClick={() => setState(state + 1)}>Increment</button>
        <br/>
        <button onClick={() => setState(state - 2)}>Decrement</button>
        <br/>
        <button onClick={() => setState(0)}>Reset</button>
    </div>

  );
};
export default Todo;