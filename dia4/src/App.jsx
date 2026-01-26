import React, { useState } from 'react'
import "./App.scss"

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
]

const App = () => {
  const [result, setResult] = useState("0")

  const handleClick = (e) => {
    const value = e.target.getAttribute("value")

    switch (value) {
      case "DEL":
        setResult(prev =>
          prev.length > 1 ? prev.slice(0, -1) : "0"
        )
        break

      case "RESET":
        setResult("0")
        break

      case "=":
        try {
          const expression = result.replace(/x/g, "*")
          const evalResult = eval(expression)
          setResult(String(evalResult))
        } catch {
          setResult("Error")
        }
        break

      case "+":
      case "-":
      case "/":
      case "x":
        setResult(prev =>
          /[+\-x/]$/.test(prev) ? prev : prev + value
        )
        break

      default:
        // números y punto
        setResult(prev =>
          prev === "0" ? value : prev + value
        )
        break
    }
  }

  return (
    <div className='wrapper'>
      <div className='cal_title'>
        <span>😨 Calculadora robada por los alumnos CEI...CUIDADOOOO!!! 😨</span>
      </div>

      <div className='cal_result mt-10'>
        <span>{result}</span>
      </div>

      <div className='cal_pad mt-10'>
        {btnValues.flat().map((item, i) => (
          <button
            key={i}
            value={item}
            onClick={handleClick}
            className={`cal_btn
              ${item === "DEL" ? 'del' : ''}
              ${item === "RESET" ? 'reset' : ''}
              ${item === "=" ? 'eq' : ''}
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
