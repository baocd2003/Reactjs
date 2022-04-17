import {useState,useEffect} from 'react'
import BasicInfoPage from './BasicInfoPage'
import Info from './Info/Info'
function App() {
  // const [isChildComponentHidden,setChild] = useState(false)
  // useEffect((isChildComponentHidden)=>{
  //      ( isChildComponentHidden) ? alert('show') : alert('hide');
  // })

  
  return (
    <div className="App">
        {/* <BasicInfoPage/> */}
        <Info/>
    </div>
  );
}

export default App;
