import styled from "styled-components";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO
// 3. Connect domain to hosting
// 5. Link Social Media to buttons
// Send email notification when someone adds a request
// Set up required fields

const Background = styled.div`
  text-align: center;
`


function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Background className="app">     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quote" element={<Form formType={"quote"}/>} />
        <Route path="/repair" element={<Form formType={"repair"}/>} />
        <Route path="/takedown" element={<Form formType={"takedown"}/>} />
      </Routes>
    </Background>
    </BrowserRouter>
  );
}

export default App;
