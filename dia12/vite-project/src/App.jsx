import { useEffect, useState } from "react";

function App() {
  const [persons, setPersons] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/persons")
    .then((response) => response.json())
    .then((data) => setPersons(data.persons))
    .catch((error) => console.error(`Error al obtener el mensaje: ${error}`))
  }, [])

  return (
    <>
      <h1>Mensaje desde Express</h1>
      <p>{persons}</p>
    </>
  )
}

export default App
