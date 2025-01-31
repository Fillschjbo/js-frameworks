import {useState} from "react";

export function Greeting (){
    const [name, setName] = useState("")
    return (
        <>
            <input type="text"
                   onChange={(e)=> {
                       setName(e.target.value)
            }}
            style={{border: !name ? "1px solid red" : "none"}}
            />
            <p>Name: {name}</p>
        </>
    )
}