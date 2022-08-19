import UseStateCount from './Components/UseStateCount';
import UseStatePrev from './Components/UseStatePrev';
import UseStateAddSubtractCount from './Components/UseStateAddSubtractCount';
import UseStateAddSubtractPrev from './Components/UseStateAddSubtractPrev';
import UseStateAddSubtractPrevArray from './Components/UseStateAddSubtractPrevArray';
import UseStateAddSubtractPrevObject from './Components/UseStateAddSubtractPrevObject';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/UseStateCount' element={<UseStateCount/>}/>
        <Route path='/UseStatePrev' element={<UseStatePrev/>}/>
        <Route path='/UseStateAddSubtractCount' element={<UseStateAddSubtractCount/>}/>
        <Route path='/UseStateAddSubtractPrev' element={<UseStateAddSubtractPrev/>}/>
        <Route path='/UseStateAddSubtractPrevArray' element={<UseStateAddSubtractPrevArray/>}/>
        <Route path='/UseStateAddSubtractPrevObject' element={<UseStateAddSubtractPrevObject/>}/>
      </Routes>
    </>
  );
}

export default App;
