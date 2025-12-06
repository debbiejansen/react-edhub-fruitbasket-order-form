
import './App.css'
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <div className={"card"}>
            <h2>🍓Aardbeien</h2>
            <button onClick={() => setCount((count) => count - 1)}>
            - </button>
            {count}
            <button onClick={() => setCount((count) => count + 1)}>
                + </button>
        </div>

        <h2>🍌Bananen</h2>
        <h2>🍎Appels</h2>
        <h2>🥝Kiwi's</h2>
    </>
  )
}

export default App
