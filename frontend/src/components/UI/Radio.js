const Radio = (props) => {
    return (
        <div className={props.className}>
            <input {...props.input} />
            <label className={props.labelClassName} htmlFor={props.input.id}>{props.label}</label>
        </div>
    );
};

export default Radio;