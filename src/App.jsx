
import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposLista";


function App() {

  const [fomularioIsOpen, setFormularioIsOpen] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');


  function handleForm(){
   setFormularioIsOpen(!fomularioIsOpen)
  }

  return (
   <>
   <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 && (
      <>
         <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
  {/* {fomularioIsOpen &&(
     <Formulario />
  )}
   <button type="button" onClick={handleForm}>Toggle</button> */}
   </>
  )
}

export default App
