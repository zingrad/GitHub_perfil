import { useState,useEffect } from "react"

const Formulario = ()=> {
   const [materiaA,setMateriaA] = useState(0)
   const [materiaB,setMateriaB] = useState(0)
   const [materiaC,setMateriaC] = useState(0)
   const [nome,setNome] = useState('')

    useEffect(()=>{
        console.log('Componente Iniciou')
        return () =>{
            console.log('O componente finalizou')
        }
    },[]);

    const alteraNome = (evento) => {
       
        
        setNome(estadoAnterior =>{
            return evento.target.value
        })
    }

    const renderizarResultado = () => {
      const soma = materiaA + materiaB + materiaC;
      const media = (soma / 3).toFixed(2);

      if(media >= 7 ){
        return(
            <h3>Olá {nome} você foi aprovado com média: {media} </h3>
        )     
      } else{
        return(
            <h3>Olá {nome} você não foi aprovado</h3>
        )
      }
    }

    return(
        <form>

        {[1,2,3,4,5].map(item => (
            <li key={item}>{item}</li>
        ))}

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input onChange={({target}) => setMateriaA(parseInt(target.value)) } type="number" placeholder="nota matéria A"/>
            <input onChange={evento => setMateriaB(parseInt(evento.target.value))} type="number" placeholder="nota matéria B"/>
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="nota matéria C"/>
            {renderizarResultado()}
        </form>
    )
}

export default Formulario