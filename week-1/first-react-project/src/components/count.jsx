import {useState} from "react";


function example (){
    const num = 10;
    return (num > 10 ? "large" : "small")
}


export function Count () {
    const [count, setCount] = useState(0)
    function squareNumber (number){
        return number * number;
    }

 return(
     <>
         <button onClick={() => {
             setCount(count + 1);
         }}
         style={{ backgroundColor: count > 10 ? "#5CF64A" : "#FFCAE9"}}
         >
             Count: {count}</button>
         <p>{count} squared is equal to = {squareNumber(count)}</p>
     </>
 )
}