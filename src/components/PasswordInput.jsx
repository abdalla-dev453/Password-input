// Code PasswordInput Component Here

import { useState } from "react";

function PasswordInput (){
    const [password, setPassword] = useState('')

    function handleChange (e) {
        setPassword(e.target.value)
        console.log("Entering password...")
    }

    return(
        <>
        <input 
        type="password" 
        value={password}
        onChange={handleChange}
        />
        </>
    );
}

export default PasswordInput;