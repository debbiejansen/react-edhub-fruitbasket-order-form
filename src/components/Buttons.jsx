function DecreaseButton(props) {
    return (
      <button onClick={props.onClick}>
          -
      </button>
    );
}

function IncreaseButton(props) {
    return (
        <button onClick={props.onClick}>
            +
        </button>
    );
}

export { DecreaseButton, IncreaseButton };