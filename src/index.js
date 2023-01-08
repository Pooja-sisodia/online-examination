import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { useState } from "react"

const root = ReactDOM.createRoot(document.getElementById('root'));

//function Component
const HeaderComponent = () => {
  return <h1>Header Using Function Component</h1>
} 


const Header = () =>{
  return <h1>my Name is Pooja </h1>
} 



// class Component
class HeaderComponentUsingClass extends React.Component {
  render(){
    return <div><p>Now Time = {+new Date()}</p>
    <p>It is {Date(Date.now()).toString()}.</p>
    <p>Date: {Date(Date.now())}</p>
  </div>
  }
}



// const CurrentTime = () =>{
//   return 
// }


// function Counter() {
//     const [data, setData]= useState(0)
//     return (
//         <div>
//             <h1>Counter</h1>
//             <button onClick={()=>setData(data+1)}>Increase</button>
//             <button onClick={()=>setData(data-1)}>Decrease</button>
//             <p>{data}</p>
//         </div>
//     )
// }


// export default Counter

function New(){
const element = (
  <div>
    <h1>Hello World</h1>
    <p>It is {new Date().toLocaleTimeString()}.</p>
  </div>
);
root.render(element)   
}
 
setInterval(New,10000)


//passing data to components via props

function Welcome(props){
  return <div >
  <h1>Name: {props.name}</h1>
  <h1>Age: {props.age}</h1>
  <h1>Place: {props.place}</h1>

</div>

}


setInterval(
  ()=> {
    root.render(
      <React.StrictMode>
     <HeaderComponent />
     <HeaderComponentUsingClass />
      {/* <CurrentTime />
      <Counter /> */}
      <Header>
      <Welcome name="Pooja"  place="Ujjain" age="20"/>
      </Header>
      <Welcome />
      </React.StrictMode>
    );
  }
)

