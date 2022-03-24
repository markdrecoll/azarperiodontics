import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/About" element={<About/>} />
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
          <Route path="/PostOpGingivectomy" element={<PostOpGingivectomy/>} /> */}
        </Routes>
      </Router>
      <NavBar />
    </>
  );
}

export default App;
