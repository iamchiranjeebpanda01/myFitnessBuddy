const Input = (props) => {

    return (
        <div className={props.className}>
            <input {...props.input} />
            <label htmlFor={props.input.id}>{props.label}</label>
        </div>
    );
};

export default Input;