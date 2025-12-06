import './App.css'
import {useState} from "react";

function App() {
    const [counts, setCounts] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0
    });

    function increase(fruit) {
        setCounts({
            ...counts,
            [fruit]: counts[fruit] + 1
        });
    }

    function decrease(fruit) {
        if (counts[fruit] === 0) {
            return;
        }
        setCounts({
            ...counts,
            [fruit]: counts[fruit] - 1
        });
    }

    function resetAll() {
        setCounts({
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0
        });
    }

    return (
        <>
            <div className="container">
                <h1>Fruitmand bezorgservice</h1>
                <div className={"card"}>
                    <h2>🍓 Aardbeien</h2>
                    <button onClick={function () {
                        decrease("strawberry");
                    }}> -
                    </button>
                    {counts.strawberry}
                    <button onClick={function () {
                        increase("strawberry");
                    }}> +
                    </button>
                </div>

                <div className="card">
                    <h2>🍌 Bananen</h2>
                    <button onClick={function () {
                        decrease("banana");
                    }}>-
                    </button>
                    {counts.banana}
                    <button onClick={function () {
                        increase("banana");
                    }}>+
                    </button>
                </div>

                <div className="card">
                    <h2>🍎 Appels</h2>
                    <button onClick={function () {
                        decrease("apple");
                    }}>-
                    </button>
                    {counts.apple}
                    <button onClick={function () {
                        increase("apple");
                    }}>+
                    </button>
                </div>

                <div className="card">
                    <h2>🥝 Kiwi's</h2>
                    <button onClick={function () {
                        decrease("kiwi");
                    }}>-
                    </button>
                    {counts.kiwi}
                    <button onClick={function () {
                        increase("kiwi");
                    }}>+
                    </button>
                </div>
                <button onClick={resetAll} className="reset-button">
                    Reset
                </button>
            </div>
        </>
    )
}

export default App
