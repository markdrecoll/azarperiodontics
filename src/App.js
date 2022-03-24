import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';

import About from './pages/about/About';
import WhatIsGingivitis from './pages/about/WhatIsGingivitis';
import WhatIsPeriimplantitis from './pages/about/WhatIsPeriimplantitis';
import WhatIsPeriodontitis from './pages/about/WhatIsPeriodontitis';

import AtHomeCare from './pages/atHomeCare/AtHomeCare';
import Brushing from './pages/atHomeCare/Brushing';
import Flossing from './pages/atHomeCare/Flossing';
import OtherTips from './pages/atHomeCare/OtherTips';

import Procedures from './pages/procedures/Procedures';
import ProcedureGingivectomy from './pages/procedures/Gingivectomy';
import OpenFlapDebridements from './pages/procedures/OpenFlapDebridements';
import OsseousSurgery from './pages/procedures/OsseousSurgery';
import ScalingAndRootPlaning from './pages/procedures/ScalingAndRootPlaning';

import PostOpCare from './pages/postOpCare/PostOpCare';
import ExposeAndBonds from './pages/postOpCare/ExposeAndBonds';
import Extractions from './pages/postOpCare/Extractions';
import FlapProcedures from './pages/postOpCare/FlapProcedures';
import FreeGingivalGrafting from './pages/postOpCare/FreeGingivalGrafting';
import GeneralPostOpInstructions from './pages/postOpCare/GeneralPostOpInstructions';
import PostOpGingivectomy from './pages/postOpCare/Gingivectomy';

function App() {

  const azarPeriodonticsBackgroundStyle={
    backgroundImage: "url('images/dental_tool_background.png')",
    height:'100vh',
    width: '100%',
    // marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <Router>
      <div style={azarPeriodonticsBackgroundStyle}>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/About" element={<About/>} />
        <Route path="/WhatIsGingivitis" element={<WhatIsGingivitis/>} />
        <Route path="/WhatIsPeriimplantitis" element={<WhatIsPeriimplantitis/>} />
        <Route path="/WhatIsPeriodontitis" element={<WhatIsPeriodontitis/>} />
        <Route path="/AtHomeCare" element={<AtHomeCare/>} />
        <Route path="/Brushing" element={<Brushing/>} />
        <Route path="/Flossing" element={<Flossing/>} />
        <Route path="/OtherTips" element={<OtherTips/>} />
        <Route path="/Procedures" element={<Procedures/>} />
        <Route path="/ProcedureGingivectomy" element={<ProcedureGingivectomy/>} />
        <Route path="/OpenFlapDebridements" element={<OpenFlapDebridements/>} />
        <Route path="/OsseousSurgery" element={<OsseousSurgery/>} />
        <Route path="/ScalingAndRootPlaning" element={<ScalingAndRootPlaning/>} />
        <Route path="/PostOpCare" element={<PostOpCare/>} />
        <Route path="/ExposeAndBonds" element={<ExposeAndBonds/>} />
        <Route path="/Extractions" element={<Extractions/>} />
        <Route path="/FlapProcedures" element={<FlapProcedures/>} />
        <Route path="/FreeGingivalGrafting" element={<FreeGingivalGrafting/>} />
        <Route path="/GeneralPostOpInstructions" element={<GeneralPostOpInstructions/>} />
        <Route path="/PostOpGingivectomy" element={<PostOpGingivectomy/>} />
      </Routes>
      </div>
    </Router>
  );
}
export default App;