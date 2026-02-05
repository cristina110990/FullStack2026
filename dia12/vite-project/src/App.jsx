import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    fetch("http://localhost:8080/api/mensaje")
    .then((response) => response.json())
    .then((data) => setMensaje(data.mensaje))
    .catch((error) => console.error(`Error al obtener el mensaje: ${error}`))
  }, [])

  return (
    <>
      <h1>Mensaje desde Express</h1>
      <p>{mensaje}</p>
    </>
  )
}

export default App
