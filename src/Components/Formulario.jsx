import { useState } from 'react'

const Formulario = () => {
    const [nombre , setNombre] = useState("");
    const [direccion , setDireccion] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (nombre.length > 3 ) {
            setShow(true)
        }else{
            setError(true)
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''> Nombre </label>
        <input type='text' value ={nombre} onChange={(event) => setNombre(event.target.value)}/>
        <label htmlFor=''> Direccion </label>
        <input type='text' onChange={(event) => setDireccion(event.target.value)}/>
        <button>Enviar</button>
      </form>
      {show ?
      <Emviado nombre= {nombre} direccion= {direccion}/>
       :
        null
       }
       {error ? <h5 style={{color: 'red'}}> Por favor, Verificar que los datos sean correctos.</h5> : null}
    </div>
  )
}

export default Formulario
