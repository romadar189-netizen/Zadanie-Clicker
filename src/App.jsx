import { useState, useEffect } from 'react'
import Stats from "./Stats"
import Shop from "./Shop"
import './App.css'

function App() {
  const [points, setPoints] = useState(0)
  const [power, setPower] = useState(1)
  const [autoPerSec, setAutoPerSec] = useState(0)

  const upgrades = [
    { id: 1, name: "Lepsza myszka", cost: 10, powerAdd: 1, autoAdd: 0 },
    { id: 2, name: "Turbo klik", cost: 30, powerAdd: 5, autoAdd: 0 },
    { id: 3, name: "Auto klik 1.0", cost: 50, powerAdd: 0, autoAdd: 1 },
    { id: 4, name: "Auto klik PRO", cost: 150, powerAdd: 0, autoAdd: 5 },
  ]

  const getLevel = () => {
    if (points <= 9) return "Newbie"
    if (points <= 49) return "Klikor"
    return "Klikor maniac"
  }

  const handleUpgrade = (upgrade) => {
    if (points >= upgrade.cost) {
      setPoints((prev) => prev - upgrade.cost)
      setPower((prev) => prev + upgrade.powerAdd)
      setAutoPerSec((prev) => prev + upgrade.autoAdd)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + autoPerSec)
    }, 1000)

    return () => clearInterval(interval)
  }, [autoPerSec])

  return (
    <>
      <h1>React Clicker</h1>
      <Stats 
        points={points} 
        power={power} 
        autoPerSec={autoPerSec} 
        level={getLevel()} 
      />

      <div className="card">
        <h2>Punkty: {points}</h2>
        <h3>Poziom: {getLevel()}</h3>

        <button onClick={() => setPoints((prev) => prev + power)}>
          Kliknij(+{power})
        </button>

        <button 
          onClick={() => setPoints((prev) => prev - 1)}
          disabled={points === 0}
        >
          -1
        </button>  

        <button onClick={() => setPoints(0)}>
          Reset
        </button>
      </div>

      <Shop 
        upgrades={upgrades}
        points={points}
        onBuy={handleUpgrade}
      />
    </>
  )
}

export default App