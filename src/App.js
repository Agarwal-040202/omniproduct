import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menubarlist from './Component/menuListBar/Menubarlist';
import Herosection from './Component/HeroSection/Herosection';
import Footersection from './Component/FooterSection/Footersection';
import Videotwo from './Component/video2/Videotwo';
import Videotwoagain from './Component/VideoTwo/Videotwoagain';
import Videothree from './Component/videothree/Videofour';
import Videofour from './Component/videothree/Videofour';
import Videofive from './Component/videofive/Videofive';
import Woodslotted from './Component/WoodSlotted/Woodslotted';
import Woodphillips from './Component/woodPhillips/Woodphillips';
import Drywellscrews from './Component/DrywellScrews410/Drywellscrews';
import Menubar from './Component/Navbar/Menubar';

function App() {
  return (
    <>
      <div className='container-fluid m-0 p-0' style={{height:"10vh"}}>     
          <Menubar />
      </div>

      {/* <Menubarlist /> */}
      <div className="Main-Layoyt-Div p-3" style={{height: "80vh",
    
    overflow: "hidden",
    
    
    }}>
      
        <Routes>
          <Route exact path="/" element={<Herosection />} />
          <Route exact path="/drywall" element={<Drywellscrews />} />
          <Route exact path="/cskphillips" element={<Videofour />} />
          <Route exact path="/cskslotted" element={<Videotwo />} />
          <Route exact path="/panphillips" element={<Videofive />} />
          <Route exact path="/panslotted" element={<Videotwoagain />} />
          <Route exact path="/woodphillips" element={<Woodphillips />} />
          <Route exact path="/woodslotted" element={<Woodslotted />} />
        </Routes>
      </div>
      <div className="App container-fluid" >
        {/* <Demo/> */}
        {/* 1 */}
        {/* <Herosection/>  */}

        {/* 2 */}
        {/* <Videotwoagain/> */}

        {/* 3 */}
        {/* <Videofour/>  */}

        {/* 4 */}

        {/* <Videotwo /> */}

        {/* 5 */}

        {/* <Videofive />  */}

        {/* 6 */}

        {/* <Woodslotted/> */}
        {/* 7 */}
        {/* <Woodphillips/> */}
        {/* 8 */}
        {/* <Drywellscrews/> */}


        {/* <Videothree/>  */}



      </div>
      <Footersection />

    </>

  );
}

export default App;
