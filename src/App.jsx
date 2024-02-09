
import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposLista";


function App() {

  const [fomularioIsOpen, setFormularioIsOpen] = useState(true);


  function handleForm(){
   setFormularioIsOpen(!fomularioIsOpen)
  }

  return (
   <>
   <Perfil nome='Erick Gomes' endereco='http://github.com/zingrad.png'/>
    <ReposList />
  {/* {fomularioIsOpen &&(
     <Formulario />
  )}
   <button type="button" onClick={handleForm}>Toggle</button> */}
   </>
  )
}

export default App
