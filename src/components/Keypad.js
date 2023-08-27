import React from "react";  //Every component should have one.

function Keypad (){
    const handlePasswordChange = (e) => {  //create const.
        console.log("Entering password..."); //what assignment asked to see.
    }
    
    
    /*Put a <input /> with an event listener*/
    return (
        <div>
            <input type="password" onChange={handlePasswordChange} />  
        </div>
    )
}

export default Keypad;