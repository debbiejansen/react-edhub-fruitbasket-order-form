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

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [postcodeValue, setPostcodeValue] = useState('');

    const [frequencyValue, setFrequencyValue] = useState('');
    const [timeOfDayValue, setTimeOfDayValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [newsletterValue, setNewsletterValue] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstNameValue, lastNameValue, ageValue, postcodeValue, frequencyValue, timeOfDayValue, messageValue, newsletterValue);
    }

    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
                <div className="container">

                    <FruitCounter
                        label="Aardbeien"
                        count={counts.strawberry}
                        onIncrease={function () {
                            increase("strawberry");
                        }}
                        onDecrease={function () {
                            decrease("strawberry");
                        }}
                    />

                    <FruitCounter
                        label="Bananen"
                        count={counts.banana}
                        onIncrease={function () {
                            increase("banana");
                        }}
                        onDecrease={function () {
                            decrease("banana");
                        }}
                    />

                    <FruitCounter
                        label="Appels"
                        count={counts.apple}
                        onIncrease={function () {
                            increase("apple");
                        }}
                        onDecrease={function () {
                            decrease("apple");
                        }}
                    />

                    <FruitCounter
                        label="Kiwi's"
                        count={counts.kiwi}
                        onIncrease={function () {
                            increase("kiwi");
                        }}
                        onDecrease={function () {
                            decrease("kiwi");
                        }}
                    />

                    <button onClick={resetAll} className="reset-button">
                        Reset
                    </button>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="first-name-field">
                        Voornaam
                        <input
                            type="text"
                            value={firstNameValue}
                            onChange={(e) => setFirstNameValue(e.target.value)}
                            id="name-field"
                            name="name"
                        />
                    </label>
                    <label htmlFor="last-name-field">
                        Achternaam
                        <input
                            type="text"
                            value={lastNameValue}
                            onChange={(e) => setLastNameValue(e.target.value)}
                            id="name-field"
                            name="name"
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="number"
                            value={ageValue}
                            onChange={(e) => setAgeValue(parseInt(e.target.value))}
                            id="age-field"
                            name="age"
                            placeholder="0"
                        />
                    </label>
                    <label htmlFor="postcode-field">
                        Postcode
                        <input
                            type="text"
                            value={postcodeValue}
                            onChange={(e) => setPostcodeValue(e.target.value)}
                            id="name-field"
                            name="name"
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Bezorgfrequentie</legend>
                    <select
                        value={frequencyValue}
                        onChange={(e) => setFrequencyValue(e.target.value)}
                    >
                        <option value="">Maak een keuze</option>
                        <option value="dagelijks">Wekelijks</option>
                        <option value="wekelijks">Om de week</option>
                        <option value="maandelijks">Maandelijks</option>
                    </select>
                    <div>
                        <label htmlFor="form-day-time">
                            <input
                                type="radio"
                                id="form-day-time"
                                name="delivery-time"
                                value="day"
                                checked={timeOfDayValue === 'day'}
                                onChange={(e) => setTimeOfDayValue(e.target.value)}
                            />
                            Overdag
                        </label>
                        <label htmlFor="form-night-time">
                            <input
                                type="radio"
                                id="form-night-time"
                                name="delivery-time"
                                value="night"
                                checked={timeOfDayValue === 'night'}
                                onChange={(e) => setTimeOfDayValue(e.target.value)}
                            />
                            Savonds
                        </label>
                    </div>
                    <label htmlFor="message-field">
                    </label>
                    <textarea
                        id="message-field"
                        name="message"
                        rows="5"
                        cols="50"
                        placeholder="Opmerkingen"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />


                    <label htmlFor="form-newsletter">
                        <input
                            type="checkbox"
                            id="form-newsletter"
                            name="newsletter"
                            checked={newsletterValue}
                            onChange={() => setNewsletterValue(!newsletterValue)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                </fieldset>
                <button type="submit">Verzenden</button>
            </form>

        </>
    )
}

export default App
