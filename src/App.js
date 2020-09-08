import React from 'react';
import { Homepage } from './pages/homepage/homepage';
import {Switch, Route, Link } from "react-router-dom";
const Hatspage = (props)=>{
  console.log(props)
  return(
    <div>
<button onClick={()=>props.history.push("/")}>Homepage</button>
<h1>
   Hats are needed most during summer season
  </h1>
  </div>
  )
  
}

const Men = ()=>(
  <h1>
    groups of men
  </h1>
)
const Women = ()=>(
  <h1>
    groups of ladies
  </h1>
)
const Topiclist = (props)=>{
return(
  <div>
  <Link to={`${props.match.url}/13`}> To Topic 13</Link>
  <Link to={`${props.match.url}/17`}> To Topic 17</Link>
  <Link to={`${props.match.url}/20`}> To Topic 20</Link>
  </div>
)
}
  
function App() {
  return (
    <div>
    <Switch>
     <Route exact path="/Hats" component={Hatspage}/>
     <Route exact path="/" component={Homepage}/>
     <Route exact path ="/topics" component={Topiclist} />
      
    </Switch>
     

    </div>
  );
}

export default App;
