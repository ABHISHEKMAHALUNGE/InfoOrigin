import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';

function App() {
  let [clicks , setClicks] = useState([]);
  let [ b1 , setB1] = useState(0);
  let [ b2 , setB2] = useState(0);
  let [ b3 , setB3] = useState(0);

  const HandleButtonClickO = (e)=>{
    e.preventDefault();
    clicks.push("b1");
    b1 = b1+1;
    setB1(b1);
  }
  const HandleButtonClickT = (e)=>{
    e.preventDefault();
    clicks.push("b2");
    b2 = b2+1;
    setB2(b2);
  }
  const HandleButtonClickTh = (e)=>{
    e.preventDefault();
    clicks.push("b3");
    b3 = b3+1;
    setB3(b3);
  }

  const syncAndAdd = (e) => {
e.preventDefault();
 const uniqueElements = new Set(clicks);
const numberOfUniqueElements = uniqueElements.size;
    if(clicks.length===0){
      b1 = b1+1;
      setB1(b1);
      b2 = b2+1;
      setB2(b2);
      b3 = b3+1;
      setB3(b3);
    }
    if(numberOfUniqueElements ===1){
      if(clicks[0]==="b1"){
        // b1 = b1+1;
        // setB1(b1);
        b2 = b2+1;
        setB2(b2);
        b3 = b3+1;
        setB3(b3);
       }

       else if(clicks[0]==="b2"){
        b1 = b1+1;
        setB1(b1);
        // b2 = b2+1;
        // setB2(b2);
        b3 = b3+1;
        setB3(b3);
       }
       
       else if(clicks[0]==="b3"){
        b1 = b1+1;
        setB1(b1);
        b2 = b2+1;
        setB2(b2);
        // b3 = b3+1;
        // setB1(b3);
       }
    }
    else if(numberOfUniqueElements ===2){
       if(!clicks.includes["b1"]){
        b1 = b1+1;
        setB1(b1);
       }

       else if(!clicks.includes["b2"]){
        b2 = b2+1;
        setB2(b2);
       }
       
       else if(!clicks.includes["b3"]){
        b3 = b3+1;
        setB3(b3);
       }
    }
    else if(numberOfUniqueElements ===3){
      let t = clicks[0];
      if(t==="b1"){
        b1 = b1+1;
        setB1(b1);
      }
      if(t==="b2"){
        b2 = b2+1;
        setB2(b2);
      }
      if(t==="b3"){
        b3 = b3+1;
        setB3(b3);
      }
    }
    console.log(clicks);
    setClicks([]);

  }
  return (
    <>
    <div className="App">
     <form action="">
       <button onClick={HandleButtonClickO} className="b1">{b1}</button>
        <button onClick={HandleButtonClickT} className="b1">{b2}</button>
         <button onClick={HandleButtonClickTh} className="b1">{b3}</button>
        
         

     </form>
    </div>
    <div className='sync'>
         <button onClick = {syncAndAdd} className="validate" >SyncAndAdd</button>
         </div>
         </>
  );
}

export default App;
