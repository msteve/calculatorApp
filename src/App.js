import {
  useState,
  useRef,useEffect 
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [count, setCount] = useState(0);

  const l = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  const [items, setItems] = useState(l);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[result]);//Without argument runs on every render.can be used for a clock..
  // With argument depends on the change on that argument
  //and with empty argument run on first render

  // useEffect(() => {
  //   //Runs on the first render
  //   //And any time any dependency value changes
  // }, [prop, state]);
 
  // Some effects require cleanup to reduce memory leaks.
  // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
  // We do this by including a return function at the end of the useEffect Hook.

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //   setCount((count) => count + 1);
  // }, 1000);

  // return () => clearTimeout(timer)
  // }, []);


  function plus(e) { 
    e.preventDefault(); 
    //{id: 3, name: 'eggs'}
    let lastItem=items[items.length-1];
    items.push( {id: lastItem.id+1, name: 'eggs_'+lastItem.id} );
    //console.log(items);
    setItems(items);
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    console.log("resetting resetInput ");
    e.preventDefault(); 
    inputRef.current.value='';
  }; 
 
  function resetResult(e) { 
    console.log("resetting result ");
    e.preventDefault();
    resultRef.current.value = 0;
    setResult(0);
  };
  
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        
        <button onClick={plus}>add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset Input</button>
        <button onClick={resetResult}>resetResult</button>
        {/* Add the resetResult button */} 
      </form> 
      <h1>I've rendered {count} times!</h1>;
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div> 
  ); 
} 
 
export default App; 
