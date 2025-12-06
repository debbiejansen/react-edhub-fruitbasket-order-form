import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter.jsx";

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
            <header>
                <h1>Fruitmand bezorgservice</h1>
                <div className="container">

                <FruitCounter
                label="Aardbeien"
                count={counts.strawberry}
                onIncrease={function () { increase("strawberry");}}
                onDecrease={function () { decrease("strawberry");}}
                />

                <FruitCounter
                    label="Bananen"
                    count={counts.banana}
                    onIncrease={function () { increase("banana");}}
                    onDecrease={function () { decrease("banana");}}
                />

                <FruitCounter
                    label="Appels"
                    count={counts.apple}
                    onIncrease={function () { increase("apple");}}
                    onDecrease={function () { decrease("apple");}}
                />

                <FruitCounter
                    label="Kiwi's"
                    count={counts.kiwi}
                    onIncrease={function () { increase("kiwi");}}
                    onDecrease={function () { decrease("kiwi");}}
                />

                <button onClick={resetAll} className="reset-button">
                    Reset
                </button>
                </div>
            </header>
        </>
    )
}

export default App
