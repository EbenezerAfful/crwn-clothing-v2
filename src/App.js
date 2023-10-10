import {Routes,Route} from 'react-router-dom'

import Navigator from './routes/home/navigation/navigation.component';

import Home from "./routes/home/home.component";



const Shop=()=>{
  return(<h1>i am the shop page </h1>)}; 

const App=()=>{
  return(
  <Routes>
    <Route path='/' element={<Navigator/>}>
      <Route index element={<Home/>}/> 
      <Route path='shop' element={<Shop/>}/>
    </Route>
  </Routes>)
}

export default App;
