import React from "react";
import Header from "./components/Header";
import Itinerario from "./components/Itinerario";
import { styled } from "styled-components";
import Template from "./components/Template";
import TemplateTwo from "./components/templateTwo";
import DatosPersonales from "./components/DatosPersonales";
import Asiento from "./components/Asiento";
import Origen from "./components/Origen";
import Ticket from "./components/Ticket";


function App() {
  return (
    <>
      {/* <Header />
      <ContainerAll>
        <Itinerario/>
      </ContainerAll> */}
      <TemplateTwo/>
      <Template/>
      
      <DatosPersonales/>
      <Asiento/>
      <Origen/>
      <Ticket/>
    </>
  );
}

export default App;

const ContainerAll = styled.div`
position: relative;
  padding: 10px 10px;
  top: 140px;
`