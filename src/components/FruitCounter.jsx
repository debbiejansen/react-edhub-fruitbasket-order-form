function FruitCounter(props) {
    const label = props.label;
    const count = props.count;
    const onIncrease = props.onIncrease;
    const onDecrease = props.onDecrease;

    return (
        <div className="card">
            <h2>{label}</h2>
            <button onClick={onDecrease}> - </button>
            {count}
            <button onClick={onIncrease}> + </button>
        </div>
    );
}

export default FruitCounter;